import React from 'react';
import { createField, Input, Textarea } from '../../Common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';
import s from './ProfileInfo.module.css';
import e from '../../Common/FormsControls/FormsControls.module.css';

export const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
    <div><button>save</button></div>
    { error && <div className={e.formSummaryError}>{error}</div> }
    <div>
      <b>Full Name: </b> { createField('Full name', 'fullName', [], Input) }
    </div>

    <div>
      <b>Looking for a job: </b> { createField('', 'lookingForAJob', [], Input, {type: 'checkbox'}) }
    </div> 

    <b>My Professional Skills: </b> 
    { createField('My Professional Skills', 'lookingForAJobDescription', [], Textarea) }

    <b>About Me: </b> 
    { createField('About Me', 'aboutMe', [], Textarea) }

    <div>
      <b>Contacts: </b> {profile && Object.keys(profile.contacts).map(key => {
        return <div key={key} className={s.contact}>
          <b>{key}: </b> { createField(key, `contacts.${key}`, [], Input) }
        </div>
      })}
    </div>

  </form>
  }

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;