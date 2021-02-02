import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/1200px-Smiley.svg.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, follow, unfollow}) => {
    return (
    <div >
        <span>
            <div>
                <NavLink to={'/profile/'+user.id}>
                    <img className={s.userPhoto} src={user.photos.small ? user.photos.small : userPhoto} alt=''/>
                </NavLink>
            </div>
            <div>
                {user.isFollow 
                    ? <button disabled={followingInProgress
                        .some(id => id === user.id)} 
                        onClick={()=>{unfollow(user.id);}}>Unfollow</button>

                    : <button disabled={followingInProgress
                        .some(id => id === user.id)} 
                        onClick={()=>{follow(user.id);}}>Follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
    </div>
    )
}


export default User;