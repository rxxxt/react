import React from "react";
import c from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return <div className={c.item}>
        <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize}
                   currentPage={currentPage} onPageChanged={onPageChanged}/>
        {
            users.map(u => <User key={u.id} user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unFollow={props.unFollow}
            />)
        }
    </div>
}

export default Users;