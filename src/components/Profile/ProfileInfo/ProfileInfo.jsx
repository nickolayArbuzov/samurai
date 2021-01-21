import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if(!props.profile){
      return <Preloader/>
    }
    return (
    <div>
      {/*<div>
        <img src='https://darsik.com/wp-content/uploads/2020/06/IMG_6700-1024x682.jpg'/>
      </div>*/}
      <div className={s.descriptionBlock}>
          {props.profile.profile.photos.large ? <img src={props.profile.profile.photos.large}/> : 'Нет фото'}
          <div>{props.profile.profile.fullName}</div>
          Открыт для предложений: <div className={props.profile.profile.lookingForAJob ? s.job : s.unJob}></div>
          <div>{props.profile.profile.lookingForAJobDescription}</div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
    )
}

export default ProfileInfo;