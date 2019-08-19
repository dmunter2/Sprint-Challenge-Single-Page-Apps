import React from "react";
// import TabNav from "./components/TabNav.js";
// import Header from "./components/Header.js";
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";

export default function AppRouter() {
    return (
        <section>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/locations' component={LocationsList} />
        </section>
     
    )
};
