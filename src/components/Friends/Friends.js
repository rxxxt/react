import React from "react";
import c from "./Friends.module.css";

const Friends = (props) => {

    let sitebarElements = props.state.friends.map(f => <Friends photo={f.photo} name={f.name}/>);

    return (
        <div className={c.item}>
            {}
        </div>
    );
}

export default Friends;