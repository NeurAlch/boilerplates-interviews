import * as React from "react";
import { IName } from "../actions/name";

export class Heading extends React.Component<{name: IName}, {}> {

    render() {

        return (
            <h1 className="text-white mt-5 px-5">
                Hello {this.props.name.firstName} {this.props.name.lastName}!
            </h1>
        );

    }

}
