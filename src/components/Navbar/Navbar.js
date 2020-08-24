import React from 'react';
import b from './Navbar.module.css';

const Navbar = () => {
    return (<nav className={b.nav}>
        <div className={b.item}>
            <a href='/profile'>Profile</a>
        </div>
        <div className={b.item}>
            <a href='/dialogs'>Messages</a>
        </div>
        <div className={b.item}>
            <a href='/news'>News</a>
        </div>
        <div className={b.item}>
            <a href='/music'>Music</a>
        </div>
        <div className={b.item}>
            <a href='/settings'>Settings</a>
        </div>
    </nav>);
}

export default Navbar;