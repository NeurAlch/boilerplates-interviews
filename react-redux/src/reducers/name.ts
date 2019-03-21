import { IName, IFetchNameErrorAction, IFetchNameAction, IFetchNameSuccessAction, NameActions, fetchName, FETCH_NAME, FETCH_NAME_SUCCESS, FETCH_NAME_ERROR } from "../actions/name";

export interface INameState {
    name: IName;
    isFetching: boolean;
    error: string | undefined;
}

const initialState: INameState = {
    name: {
        firstName: undefined,
        lastName: "World",
    },
    error: undefined,
    isFetching: false,
}

export function nameReducer(state = initialState, action: NameActions): INameState {

    if (action.type === FETCH_NAME) {

        return Object.assign({}, state, {
            isFetching: true,
            error: undefined,
        });

    } else if (action.type === FETCH_NAME_SUCCESS) {

        return Object.assign({}, state, {
            isFetching: false,
            name: action.payload,
            error: undefined,
        });

    } else if (action.type === FETCH_NAME_ERROR) {

        return Object.assign({}, state, {
            isFetching: false,
            error: action.payload,
        });

    }

    return state;

}