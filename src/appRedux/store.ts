import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReduxReducers from './index';

declare global {
	interface Window {
		store: any;
	}
}

const store = createStore(combineReducers(ReduxReducers), composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;
