import React from "react";

const User = (props) => {
    return (
        <div>
            <img src='https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg'/>
            {props.name}
        </div>
    );
}

export default User;