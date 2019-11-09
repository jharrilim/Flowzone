import { NavigationContainerComponent, NavigationNavigateAction } from 'react-navigation';

export class NavigationService {
    private _navigator: NavigationContainerComponent;
    private _isSet = false;

    constructor() {
    }

    setNavigator(navigator: NavigationContainerComponent) {
        if(this._isSet)
            return;
        this._navigator = navigator;
        this._isSet = true;
    }

    dispatch(actionPayload: NavigationNavigateAction) {
        return this._navigator.dispatch(actionPayload);
    }
}
