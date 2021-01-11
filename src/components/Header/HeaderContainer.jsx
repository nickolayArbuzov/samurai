import React from 'react';
import Header from './Header';
import { setAuthUserData } from '../../redux/authReducer';
import {connect} from 'react-redux';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount(){
        authAPI.isAuth().then(data => {
            let {id, email, login} = data.data;
            if(data.resultCode === 0){
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render(){
        return <Header {...this.props}/>
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);