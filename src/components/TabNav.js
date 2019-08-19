import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";




// TODO: Add missing tabs below
export default function TabNav() {
    return (
    <div className='tab-nav'>
        <NavLink className='h2s' to='/'>
            <h4>HomePage</h4>
        </NavLink>

        <NavLink className='h2s' to='/characters'>
            <h4>Character</h4>
        </NavLink>

        <NavLink className='h2s' to='/locations'>
            <h4>Locations</h4>
        </NavLink>

        <NavLink className='h2s' to='/episodes'>
            <h4>Episodes</h4>
        </NavLink>
    </div>
    )

};
