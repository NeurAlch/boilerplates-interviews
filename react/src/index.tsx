import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {

    return (
        <div className="container mx-auto">
            <h1 className="text-white mt-5">Hello World</h1>,
        </div>
    );

}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);