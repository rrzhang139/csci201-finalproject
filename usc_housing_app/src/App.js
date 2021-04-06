import React from "react";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Listing from './pages/Listing';
import Login from './pages/Login';
import Header from './components/Header';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            < Switch >
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
                <Route path="/listings" component={Listing} />
                {/* <Route path="/listings">
                    <Header />
                    <Listing />
                </Route> */}
                {/* <Route path="/chat">
                    <Header title={'Chat'} />
                    <Chat />
                </Route> */}
                <Route path="/login">
                    <Header />
                    <Home />
                </Route>

            </Switch >
        </Router>


    );
}



