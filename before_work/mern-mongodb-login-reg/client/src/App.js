import React, { Component } from 'react';
import { Home, Signup, Classroom, Monthly,Profile } from './pages';
// import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/classroom" component={Classroom} />
                    <Route path="/monthly" component={Monthly} />
                    <Route path="/profile" component={Profile} />
                </div>
            </Router>
        );
    };
};
export default App;
