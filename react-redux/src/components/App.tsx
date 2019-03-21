import * as React from "react";
import { Dispatch } from "redux";
import { Heading } from "./Heading";
import { AppState } from "../store";
import { connect } from "react-redux";
import { getName, IName } from "../actions/name";

interface AppProps {
    name: IName;
    error: string;
    isFetching: boolean;
    getName: typeof getName;
}

class App extends React.Component<AppProps> {

    componentDidMount() {

        this.props.getName();

    }

    render() {

        const { isFetching, error, name } = this.props;

        if (isFetching) {

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

const mapStateToProps = (state: AppState) => ({
    name: state.name.name,
    error: state.name.error,
    isFetching: state.name.isFetching,
});

const matchDispatchToProps = (dispatch: Dispatch) => ({
    getName: () => {
        getName()(dispatch);
    }
})

export default connect(mapStateToProps, matchDispatchToProps)(App);