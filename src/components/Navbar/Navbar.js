import React from 'react';
import b from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./../Friends/Friends";

const Navbar = (props) => {

    let sitebarElements = props.state.friends.map(f => <Friends photo={f.photo} name={f.name} id={f.id}/>);

    return (
        <nav className={b.nav}>
            <div className={b.item}>
                <NavLink to='/profile' activeClassName={b.active}>Profile</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/dialogs' activeClassName={b.active}>Messages</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/news' activeClassName={b.active}>News</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/music' activeClassName={b.active}>Music</NavLink>
            </div>
            <div className={b.item}>
                <div className={b.siteBar}>
                    <NavLink to='/settings' activeClassName={b.active}>Settings</NavLink>
                </div>
            </div>
            <div className={b.item}>
                <div className={b.siteBar}>
                    <NavLink to='/friends' activeClassName={b.active}>
                        Friends
                        <div>
                            {sitebarElements}
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;