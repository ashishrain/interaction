import React from 'react';
import Week1 from './components/Week1';
import Week2 from './components/Week2';
import Week3 from './components/Week3';
import Week4 from './components/Week4';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Homepage = () => (
    <nav>
        <h1>Interaction Design</h1>
        <ul>
            <li>
                <Link to="/week-1"><h2>Week 1</h2></Link>
            </li>
            <li>
                <Link to="/week-2"><h2>Week 2</h2></Link>
            </li>
            <li>
                <Link to="/week-3"><h2>Week 3</h2></Link>
            </li>
            <li>
                <Link to="/week-4"><h2>Week 4</h2></Link>
            </li>
        </ul>
    </nav>
);

const App = () => (
    <Router>
        <Switch>
            <Route path="/week-1">
                <Week1 />
            </Route>
            <Route path="/week-2">
                <Week2 />
            </Route>
            <Route path="/week-3">
                <Week3 />
            </Route>
            <Route path="/week-4">
                <Week4 />
            </Route>
            <Route path="">
                <Homepage />
            </Route>
        </Switch>
    </Router>
);


export default App;
