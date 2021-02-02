import React, { useState } from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/1200px-Smiley.svg.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false); 

    if(!profile){
      return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
      if(e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    }

    const onSubmit = (formData) => {
      saveProfile(formData);
    }

    return (
    <div>
      <div className={s.descriptionBlock}>
          <img src={profile.photos.large || userPhoto } className={s.mainPhoto}/>
          { isOwner && <input type={'file'} onChange={onMainPhotoSelected}/> }
          
          { editMode 
          ? <ProfileDataForm profile={profile} onSubmit={onSubmit}/> 
          : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>{setEditMode(true)}}/> 
          }

          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
          
      </div>
    </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return <div>
          {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
          <div>
            <b>Full Name: </b> {profile.fullName}
          </div>

          <div>
            <b>Looking for a job: </b> <div className={profile.lookingForAJob ? s.job : s.unJob}></div>
          </div> 

          <div>
            <b>My Professional Skills:</b> {profile.lookingForAJobDescription}
          </div>
          
          <div>
            <b>About Me: </b> {profile.aboutMe}
          </div>

          <div>
            <b>Contacts: </b> {profile && Object.keys(profile.contacts).map(key => {
              return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
          </div>
        </div>
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;