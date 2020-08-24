import React from 'react';
import b from './Navbar.module.css';

const Navbar = () => {
    return (<nav className={b.nav}>
        <div className={b.item}>
            <a>Profile</a>
        </div>
        <div className={b.item}>
            <a>Messages</a>
        </div>
        <div className={b.item}>
            <a>News</a>
        </div>
        <div className={b.item}>
            <a>Music</a>
        </div>
        <div className={b.item}>
            <a>Settings</a>
        </div>
    </nav>);
}

export default Navbar;