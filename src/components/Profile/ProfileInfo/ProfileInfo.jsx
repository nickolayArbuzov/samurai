import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile){
      return <Preloader/>
    }
    return (
    <div>
      <div className={s.descriptionBlock}>
          {profile.profile.photos.large ? <img src={profile.profile.photos.large}/> : 'Нет фото'}
          <div>{profile.profile.fullName}</div>
          Открыт для предложений: <div className={profile.profile.lookingForAJob ? s.job : s.unJob}></div>
          <div>{profile.profile.lookingForAJobDescription}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
    )
}

export default ProfileInfo;