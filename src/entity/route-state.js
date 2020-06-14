export class RouteState {
    constructor(route) {
        this.route = route;
        this.parameters = {};
        this.matchedPath = '';
        this.remainingPath = '';
        this.new = true;
    }
}