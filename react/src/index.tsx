import * as React from "react";
import * as ReactDOM from "react-dom";

import { Gallery } from "./Gallery";

class App extends React.Component {
    static displayName = "App";
    render() {

        return (
            <div className="container mx-auto">
                <h1 className="text-white mt-5">Photo App</h1>
                <Gallery />
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);