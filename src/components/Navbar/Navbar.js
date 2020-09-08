import React from "react";
import b from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
const Navbar = () => {
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
                <div className={b.sideBar}>
                    <NavLink to='/settings' activeClassName={b.active}>Settings</NavLink>
                </div>
            </div>
            <div className={b.item}>
                <div className={b.item}>
                    <NavLink to='/users' activeClassName={b.active}>Users</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;