import fetch from "cross-fetch";
import { observable, action, runInAction } from "mobx";

interface IName {
    lastName: string;
    firstName: string;
}

const getEmptyData = () => {
    return {
        firstName: "",
        lastName: "",
    }
}

class Store {

    @observable error = "";
    @observable fetching = false;
    @observable.shallow name = getEmptyData();

    @action async getName() {

        this.fetching = true;

        return fetch("https://seo.pablorosales.xyz/api/name")
            .then(response => response.json())
            .then(json => {

                runInAction(() => {

                    this.name = json;
                    this.fetching = false;

                });

            })
            .catch(error => {

                runInAction(() => {

                    this.fetching = false;
                    this.name = getEmptyData();
                    this.error = "Error getting data";


                });

                console.log(error);

            });


    }

}

export const store = new Store();