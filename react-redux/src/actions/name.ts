import fetch from "cross-fetch";
import { Dispatch, ActionCreator } from "redux";

export const FETCH_NAME = "FETCH_NAME";
export const FETCH_NAME_ERROR = "FETCH_NAME_ERROR";
export const FETCH_NAME_SUCCESS = "FETCH_NAME_SUCCESS";

export interface IName {
    lastName: string;
    firstName: string | undefined;
}

export interface IFetchNameAction {
    type: typeof FETCH_NAME;
}

export interface IFetchNameSuccessAction {
    type: typeof FETCH_NAME_SUCCESS;
    payload: IName;
}

export interface IFetchNameErrorAction {
    type: typeof FETCH_NAME_ERROR;
    payload: string;
}

export type NameActions = IFetchNameAction | IFetchNameSuccessAction | IFetchNameErrorAction;

export function fetchName(): IFetchNameAction {

    return {
        type: FETCH_NAME,
    };

}

export function fetchNameSuccess(name: IName): IFetchNameSuccessAction {


    return {
        type: FETCH_NAME_SUCCESS,
        payload: name,
    };

}

export function fetchNameError(error: string): IFetchNameErrorAction {

    return {
        type: FETCH_NAME_ERROR,
        payload: error,
    };

}

export function getName(): ActionCreator<Promise<NameActions>> {

    return async function(dispatch: Dispatch): Promise<NameActions> {

        dispatch(fetchName());

        return fetch("https://seo.pablorosales.xyz/api/name")
            .then(response => response.json())
            .then(json => dispatch(fetchNameSuccess({
                firstName: json.firstName,
                lastName: json.lastName,
            })))
            .catch((error) => dispatch(fetchNameError("There was an error getting data")));

    }

}