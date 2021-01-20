import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader'

class App extends React.Component {

  componentDidMount(){
    this.props.initializeApp();
  }

  render (){
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return ( 
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar/>
        <div className='app-wrapper-content'>
          <Route path='/login'
          render={ () => <Login /> }/>

          <Route path='/Profile/:userId?' 
          render={ () => <ProfileContainer /> }/>

          <Route path='/Users' 
          render={ () => <UsersContainer /> }/>

          <Route path='/Dialogs' 
          render={ () => <DialogsContainer /> }/>

          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
 
export default compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp}))(App);
