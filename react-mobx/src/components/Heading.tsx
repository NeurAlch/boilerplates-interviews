import * as React from "react";

interface IName {
    firstName: string;
    lastName: String;
}

export class Heading extends React.Component<{name: IName}, {}> {

    render() {

        return (
            <h1 className="text-white mt-5">
                Hello {this.props.name.firstName} {this.props.name.lastName}!
            </h1>
        );

    }

}
