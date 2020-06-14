import { clearSlashes } from '../utils';

@automate.service({
    namespace: 'automate',
    key: 'historyProvider'
})
export class HistoryProviderService extends automate.Service {
    get path() {
        var value = location.pathname + location.search;

        value = decodeURI(value);
        value = clearSlashes(value);
        value = value.replace(/\?(.*)$/, '');

        if (this.base === '/') {
            return value;
        }

        return value.replace(this.base, '');
    }

    constructor() {
        super();
        this.base = '/';
        this.current = '';
    }

    config(options) {
        if (options.base) {
            this.base = '/' + clearSlashes(options.base) + '/';
        }
    }

    listen(listener) {
        var self = this;
        var fn = function () {
            if (self.current !== self.path) {
                self.current = self.path;
                listener.call(self, self.current);
            }
        };

        this.current = this.path;
        clearInterval(this.interval);
        this.interval = setInterval(fn, 50);
    }

    navigate(path) {
        path = path || '';
        history.pushState(null, null, this.base + clearSlashes(path));
    }

    stop() {
        clearInterval(this.interval);
    }
}