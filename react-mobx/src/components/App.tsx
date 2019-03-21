import * as React from "react";
import { store } from "../store";
import { Heading } from "./Heading";
import { observer } from "mobx-react";

@observer
class App extends React.Component {

    componentDidMount() {

        store.getName();

    }

    render() {

        const { fetching, error, name } = store;

        if (fetching) {

            return <div className="text-white p-3">Loading...</div>;

        }

        if (error) {
            return <div className="text-red p-3">Error: {error}</div>;
        }

        return (
            <div className="container mx-auto">
                <Heading name={name} />
            </div>
        );

    }

}

export {
    App,
}