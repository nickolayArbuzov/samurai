import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/1200px-Smiley.svg.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if(!profile){
      return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
      if(e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    }

    return (
    <div>
      <div className={s.descriptionBlock}>
          <img src={profile.profile.photos.large || userPhoto } className={s.mainPhoto}/>
          { isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }
          <div>{profile.profile.fullName}</div>
          Открыт для предложений: <div className={profile.profile.lookingForAJob ? s.job : s.unJob}></div>
          <div>{profile.profile.lookingForAJobDescription}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>
    )
}

export default ProfileInfo;