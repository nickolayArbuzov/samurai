import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return ( 
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <NavBar/>
        <div className='app-wrapper-content'>

          <Route path='/Profile' 
          render={ () => <Profile 
          state={props.state.profilePage}/> }/>

          <Route path='/Dialogs' 
          render={ () => <Dialogs 
          state={props.state.dialogsPage} /> }/>

          <Route path='/News' component={News}/>
          <Route path='/Music' component={Music}/>
          <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
