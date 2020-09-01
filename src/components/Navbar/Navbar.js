import React from 'react';
import b from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./../Friends/Friends";

const Navbar = () => {

  //  let sidebarElements = props.state.friends.map(f => <UsersApiComponents photo={f.photo} name={f.name} id={f.id}/>);

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
                <div className={b.sideBar}>
                    <NavLink to='/friends' activeClassName={b.active}>
                        Friends
                      {/*  <div>
                            {sidebarElements}
                        </div>*/}
                    </NavLink>
                </div>
                <div className={b.item}>
                    <NavLink to='/users' activeClassName={b.active}>Users</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;