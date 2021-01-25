import React from 'react';
import Paginator from '../Common/Paginator/Paginator';
import User from './User';


let Users = ({Page, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return <div>
            <Paginator Page={Page} onPageChanged={onPageChanged} 
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {
            users.map(u => <User user={u} key={u.id} followingInProgress={props.followingInProgress} 
                                unfollow={props.unfollow} follow={props.follow} /> )                    
            }
    </div>
}

export default Users;