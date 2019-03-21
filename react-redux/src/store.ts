import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { nameReducer } from './reducers/name';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = combineReducers({
    name: nameReducer,
});

export const store = createStore(
    root,
    composeWithDevTools(
        applyMiddleware(
            thunk,
        )
    )
);

export type AppState = ReturnType<typeof root>