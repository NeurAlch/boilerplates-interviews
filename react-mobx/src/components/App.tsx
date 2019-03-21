import * as React from "react";
import { store, IProduct } from "../store";
import { Product } from "./Product";
import { observer } from "mobx-react";

@observer
class App extends React.Component {

    componentDidMount() {

        store.getProducts();

    }

    render() {

        const { fetching, error, data } = store;

        if (fetching) {

            return <div className="text-white font-bold bg-orange p-3">Loading...</div>;

        }

        if (error) {
            return <div className="text-white font-bold bg-red p-3">{error}</div>;
        }

        return (
            <div className="container mx-auto mt-10">
                {data.products && data.products.length > 0 ?
                    <table className="border border-grey-light">
                        <thead>
                            <tr>
                                <th className="p-2 text-white border-b">Name</th>
                                <th className="p-2 text-white">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.products.map((product: IProduct, i: number) => {
                                return (
                                    <Product key={`product-${product.id}`} product={product} />
                                )
                            })}
                        </tbody>
                    </table>
                    :
                    <p className="p-5 text-white font-bold bg-orange-dark">No Products Found</p>
                }
            </div>
        );

    }

}

export {
    App,
}