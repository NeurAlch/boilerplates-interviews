import fetch from "cross-fetch";
import { observable, action, runInAction } from "mobx";

export interface IProduct {
    id: string;
    name: string;
    description: string;
}

const getEmptyData = (): {products: IProduct[]} => {
    return {
        products: [],
    };
}

class Store {

    @observable error = "";
    @observable fetching = false;
    @observable.shallow data = getEmptyData();

    @action async getProducts() {

        this.fetching = true;

        return fetch("http://localhost:8080/api/products", {headers: {
            "X-Requester": "ScalablePathTest",
        }})
            .then(response => response.json())
            .then(json => {

                runInAction(() => {

                    this.data = json;

                    setTimeout(() => {
                        this.fetching = false;
                    }, 3000);

                });

            })
            .catch(error => {

                runInAction(() => {

                    this.fetching = false;
                    this.data = getEmptyData();
                    this.error = "Error getting products";


                });

                console.log(error);

            });


    }

}

export const store = new Store();