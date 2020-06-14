import { clearSlashes } from '../utils';
import { RouteState } from '../entity';
import { HashProviderService } from './hash-service';
import { HistoryProviderService } from './history-service';

@automate.service({
    namespace: 'automate',
    key: 'routerService',
    inject: {
        '$hash': HashProviderService,
        '$history': HistoryProviderService,
        '$injector': 'injector'
    }
})
export class RouterService extends automate.Service {
    constructor() {
        super();
        this.settings = {},
        this.provider = null;
        this.mode = 'hash';
        this.routes = [];
        this.currentRouteStates = [];
        this.routeChange = new automate.Message();
    }

    config(routes, options) {
        this.routes = routes;

        if (options) {
            if (options.mode === 'history' && !!(history.pushState)) {
                this.mode = 'history';
            }

            this.settings = automate.merge( {
                namespace: 'automate',
                using: {}
            }, options);
        }

        if (this.mode === 'history') {
            this.$history.settings(options);
            this.provider = this.$history;
        } else {
            this.provider = this.$hash;
        }
    }

    add(route) {
        this.routes.push(route);
    }

    remove(route) {
        automate.remove(this.routes, route);
    }

    map(path) {
        var self = this,
            formerRouteStates = this.currentRouteStates;

        path = clearSlashes(path);

        this.currentRouteStates = [];

        this.matchRoutes(this.routes, path, formerRouteStates);

        var data;

        this.currentRouteStates.some(function (state, index) {
            if (state.new) {
                data = {
                    depth: index,
                    state: state
                };
                return true;
            }
        });

        this.currentRouteStates.forEach(function (state) {
            state.new = false;
        });

        self.routeChange.fire(data);
    }

    matchRoutes(routes, path, formerRouteStates) {
        if (!routes || !routes.length) {
            return;
        }

        var self = this;

        routes.some(function (route) {
            var matched = self.matchRoute(route, path);

            if (matched) {
                if (formerRouteStates.length) {
                    var oldOne = formerRouteStates.shift();

                    if (matched.route === oldOne.route) {
                        self.currentRouteStates.push(oldOne);
                    }
                    else {
                        self.currentRouteStates.push(matched);
                    }
                } else {
                    self.currentRouteStates.push(matched);
                }

                self.matchRoutes(route.children, matched.remainingPath, formerRouteStates);

                return true;
            }
        });
    }

    matchRoute(route, path) {
        var state = new RouteState(route),
            matchedFragments = [],
            segments = route.path.split('/'),
            fragments = path.split('/');

        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];

            if (i >= fragments.length) {
                return null;
            }

            var fragment = fragments[i];

            if (segment === fragment) {
                matchedFragments.push(fragment);
            } else if (segment.startsWith(':')) {
                matchedFragments.push(fragment);
                state.parameters[segment.substring(1)] = fragment;
            } else {
                return null;
            }
        }

        state.matchedPath = matchedFragments.join('/');
        state.remainingPath = fragments.splice(segments.length).join('/');

        return state;
    }

    listen() {
        var self = this;

        this.provider.listen(function (path) {
            self.map(path);
        });
    }

    navigate(path) {
        this.provider.navigate(path || '');
    }

    stop() {
        this.provider.stop();
    }

    watchRouteChange(depth, action) {
        var self = this;

        function handler(e) {
            if (e.data.depth === depth) {
                action({
                    component: self.resolveComponent(e.data.state.route.component),
                    state: e.data.state
                });
            }
        }

        this.routeChange.on(handler);

        return function () {
            this.routeChange.off(handler);
        };
    }

    resolveComponent(fullName) {
      return this.$injector.parseComponent(fullName, this.settings.using, this.settings.namespace);
    }
}