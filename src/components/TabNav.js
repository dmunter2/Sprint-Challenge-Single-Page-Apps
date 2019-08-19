import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
    <div>
        <NavLink to='/'>
            <h2>HomePage</h2>
        </NavLink>

        <NavLink to='/characters'>
            <h2>Character</h2>
        </NavLink>

        <NavLink to='locations'>
            <h2>Locations</h2>
        </NavLink>

        <NavLink to='episodes'>
            <h2>Episodes</h2>
        </NavLink>
    </div>
    )

};
