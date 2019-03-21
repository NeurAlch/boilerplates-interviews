import * as React from "react";
import { IProduct } from "../store";

export class Product extends React.Component<{product: IProduct}, {}> {

    render() {

        return (
            <tr className="text-white">
                <td className="p-3 border-b">
                    <strong>{this.props.product.name}</strong>
                </td>
                <td className="p-3 border">
                    <span className="block">{this.props.product.description}</span>
                </td>
            </tr>
        );

    }

}
