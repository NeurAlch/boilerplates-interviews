import * as React from "react";
import { store } from "./store";
import App from "./components/App";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);