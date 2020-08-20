import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import Welcome from './Welcome';
import Search from "./Search";
import Fetch from "./Fetch";
import NotFound from './NotFound';

class Home extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/search" component={Search} />
                    <Route path="/fetch" component={Fetch} />
                    <Route path="" component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

export default Home;