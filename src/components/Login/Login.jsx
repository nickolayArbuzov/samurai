import React from 'react';
import { reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { createField } from '../Common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import s from '../Common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) =>{

    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type:'password'})}
            {createField(null, 'rememberMe', [], Input, {type:'checkbox'}, 'remember me')}

            {captchaUrl && 
            <div>
                <img src={captchaUrl}/>
                {createField('Anti-bot symbols', 'captcha', [required], Input, {})}
            </div>}

            {error && <div className={s.formSummaryError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>;
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);