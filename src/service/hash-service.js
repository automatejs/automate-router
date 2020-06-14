@automate.service({
    namespace: 'automate',
    key: 'hashProvider'
})
export class HashProviderService extends automate.Service {
    get path() {
        return location.hash.substr(1);
    }

    constructor() {
        super();
        this.listener = null;
    }

    navigate(path) {
        path = path || '';
        location.hash = path;
    }

    listen(listener) {
        var self = this;

        this.listener = function () {
            listener.call(self, self.path);
        };

        window.addEventListener('hashchange', this.listener);
        listener.call(self, self.path);
    }

    stop() {
        window.removeEventListener('hashchange', this.listener);
    }
}