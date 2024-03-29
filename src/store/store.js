import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { thunk } from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
            window.devToolsExtention ? window.devToolsExtention() : f => f
        )
    );
}