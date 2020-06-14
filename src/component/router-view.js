import { RouterService } from '../service';

@automate.component({
    namespace: 'automate',
    key: 'routerView',
    inject: {
        $router: RouterService
    }
})
class RouterViewComponent extends automate.Component {
    constructor() {
        super();
        this.view = null;
        this.viewDepth = 0;
        this.unWatchRouteChange = null;
    }

    afterViewRendered() {
        if(automate.isNumber(this.$$parent.viewDepth)) {
            this.viewDepth = this.$$parent.viewDepth + 1;
        }

        this.unWatchRouteChange = this.$router.watchRouteChange(this.viewDepth, e => this.updateView(e));

        if(this.viewDepth === 0) {
            // it is root view, start to listen to route change event
            this.$router.listen();
        }
    }

    updateView(e) {
        this.clearView();
        this.renderView(e.component);
    }

    clearView() {
        if (this.view != null) {
            this.view.$destroy();
            this.view = null;
        }
    }

    renderView(component) {
        this.view = automate.injector.createComponent(component);
        this.view.viewDepth = this.viewDepth + 1;
        this.view.$mount(this.$container);
        this.view.$render();
    }

    onDestroy() {
        this.unWatchRouteChange && this.unWatchRouteChange();
        this.clearView();
    }
}