import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = () => {
  return ( 
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar/>
        <div className='app-wrapper-content'>

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

export default App;
