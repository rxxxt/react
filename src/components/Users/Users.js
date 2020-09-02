import React from 'react';
import c from './Users.module.css';
import userPhoto from '../../assets/img/userPhoto.png';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= 10/*pagesCount*/; i++) {
        pages.push(i);
    }

    return (
        <div className={c.item}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && c.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={c.userPhoto}/>
                    </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                usersAPI.unFollow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                });
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                usersAPI.follow(u.id).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                });
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    );
}

export default Users;