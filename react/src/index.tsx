import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    static displayName = "App";
    render() {

        return (
            <div className="container mx-auto">
                <h1 className="text-white mt-5">React App</h1>
            </div>
        );

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);