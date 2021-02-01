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
          <img src={profile.photos.large || userPhoto } className={s.mainPhoto}/>
          { isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }
          
          <ProfileData profile={profile}/>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          
      </div>
    </div>
    )
}

const ProfileData = (profile) => {
  return <div>
          <div>
            <b>Full Name: </b> {profile.profile.fullName}
          </div>

          <div>
            <b>Looking for a job: </b> <div className={profile.profile.lookingForAJob ? s.job : s.unJob}></div>
          </div> 

          {
          profile.profile.lookingForAJobDescription &&
            <div>My Professional Skills: {profile.profile.lookingForAJobDescription}</div> 
          }

          <div>
            <b>Contacts: </b> {profile.profile && Object.keys(profile.profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={profile.profile.contacts[key]}/>
            })}
          </div>
        </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;