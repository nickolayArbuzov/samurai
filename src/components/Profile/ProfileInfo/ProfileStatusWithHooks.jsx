import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); 
    let [status, setStatus] = useState(props.status); 
    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode
            ?
            <div>
                <span onDoubleClick={ activateEditMode }>{props.status || '___'} </span>
            </div>
            :
            <div>
                <input onBlur={ deactivateEditMode } onChange={ onStatusChange } autoFocus={true} value={ status }/>
            </div> }
        </div>
    )
}

export default ProfileStatusWithHooks;