import React from 'react';
import a from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={a.header}>
            <img
                src='https://mediamc.com.au/wp-content/uploads/2018/09/kisspng-social-media-marketing-youth-social-media-5ac29e4bc9dcf5.9923161815227039478268-1024x732-1.png'/>
            <div className={a.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;