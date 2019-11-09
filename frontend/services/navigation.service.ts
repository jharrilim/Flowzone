import { NavigationContainerComponent, NavigationNavigateAction } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

export class NavigationService {
    private _authNavigator: NavigationContainerComponent;
    private _drawerNavigator: NavigationContainerComponent;

    constructor() {
    }

    setAuthNavigator(navigator: NavigationContainerComponent) {
        this._authNavigator = navigator;
    }

    setDrawerNavigator(navigator: NavigationContainerComponent) {
        this._drawerNavigator = navigator;
    }

    dispatchAuthNavigator(actionPayload: NavigationNavigateAction) {
        return this._authNavigator.dispatch(actionPayload);
    }

    dispatchDrawerNavigator(actionPayload: NavigationNavigateAction) {
        return this._drawerNavigator.dispatch(actionPayload);
    }

    openDrawer() {
        return this._drawerNavigator.dispatch({ type: DrawerActions.OPEN_DRAWER } );
    }

    closeDrawer() {
        return this._drawerNavigator.dispatch({ type: DrawerActions.CLOSE_DRAWER });
    }

    toggleDrawer() {
        return this._drawerNavigator.dispatch({ type: DrawerActions.TOGGLE_DRAWER });
    }
}
