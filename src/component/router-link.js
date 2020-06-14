import { RouterService } from '../service';

@automate.component({
    namespace: 'automate',
    key: 'routerLink',
    template: '<span class="link" style="cursor: pointer;" @click="navigate()"><slot name="content"></slot></span>',
    inject: {
        $router: RouterService
    }
})
class RouterLinkComponent extends automate.Component {
    constructor() {
        super();
        this.props.to = '';
    }

    navigate() {
        this.$router.navigate(this.props.to);
    }
}