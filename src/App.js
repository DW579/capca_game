import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./App/Pages/Main";
import Game from "./App/Pages/Game";
import Results from "./App/Pages/Results";

class App extends Component {
    render() {
        const App = () => (
            <div>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/game" component={Game} />
                    <Route path="/results" component={Results} />
                </Switch>
            </div>
        );
        return (
            <Switch>
                <App />
            </Switch>
        );
    }
}

export default App;
