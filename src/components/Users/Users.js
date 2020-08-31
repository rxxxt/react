import React from "react";
import c from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg',
                    followed: true,
                    fullName: "Dima",
                    status: "Hello World",
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg',
                    followed: false,
                    fullName: "Valera",
                    status: "Hello World",
                    location: {city: 'Moskow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://kbimages1-a.akamaihd.net/7cf95f7f-c08c-494b-a68f-c6023e2b3a1e/1200/1200/False/il-vocazzo-1.jpg',
                    followed: true,
                    fullName: "Sveta",
                    status: "Hello World",
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div className={c.item}>
                        <img src={u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
}

export default Users;