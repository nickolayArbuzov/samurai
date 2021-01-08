import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/1200px-Smiley.svg.png';
import { NavLink } from 'react-router-dom';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }
    return <div>
            <div>
                {pages.map(p => {
                    return <span className={(props.currentPage === p && s.selectedPage) || s.pagination}
                        onClick={() => {props.onPageChanged(p)}}>{p} </span>
                })}
            </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                            <img className={s.userPhoto} src={u.photos.small ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.isFollow 
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
}


export default Users;