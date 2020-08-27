import React from "react";
import c from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let path = "/friends/" + props.id;

    return (
        <div className={c.friends + ' ' + c.active}>
            <NavLink to={path}>
                <img src={props.photo}/>
                <div className={c.item}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default Friends;