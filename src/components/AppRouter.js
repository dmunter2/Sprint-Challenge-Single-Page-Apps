import React from "react";
// import TabNav from "./components/TabNav.js";
// import Header from "./components/Header.js";
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import { Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import EpisodeList from './EpisodeList';

export default function AppRouter() {
    return (
        <section>
            <Route exact path='/' component={WelcomePage} />
            <Route path='/characters' component={CharacterList} />
            <Route path='/locations' component={LocationsList} />
            <Route path='/episodes' component={EpisodeList}/>
        </section>
     
    )
};
