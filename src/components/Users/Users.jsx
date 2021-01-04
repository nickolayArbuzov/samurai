import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([
            {id:1, photoURL:'https://thumbs.dfs.ivi.ru/storage28/contents/0/a/af123c498faf693e147cd3bc70483e.jpg', isFollow: true, fullName:'Kolya', status:'I am student', location:{city:'Minsk', country:'Belarus'}},
            {id:2, photoURL:'https://thumbs.dfs.ivi.ru/storage28/contents/0/a/af123c498faf693e147cd3bc70483e.jpg', isFollow: true, fullName:'Ujin', status:'I am not student', location:{city:'Moscow', country:'Russia'}},
            {id:3, photoURL:'https://thumbs.dfs.ivi.ru/storage28/contents/0/a/af123c498faf693e147cd3bc70483e.jpg', isFollow: true, fullName:'Irina', status:'I am working', location:{city:'Minsk', country:'Belarus'}},
            {id:4, photoURL:'https://thumbs.dfs.ivi.ru/storage28/contents/0/a/af123c498faf693e147cd3bc70483e.jpg', isFollow: true, fullName:'Maria', status:'I am relocating', location:{city:'LasAngeles', country:'USA'}}
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div className={s.userPhoto}>
                        <img src={u.photoURL} />
                    </div>
                    <div>
                        {u.isFollow 
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
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
}

export default Users;