import React from 'react';
import { Route, withRouter, BrowserRouter, HashRouter } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';
import store from './redux/reduxStore';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/WithSuspense';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          render={ withSuspense(ProfileContainer) }/>

          <Route path='/Users' 
          render={ withSuspense(UsersContainer) }/>

          <Route path='/Dialogs' 
          render={ withSuspense(DialogsContainer) }/>

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
 
let AppContainer = compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp}))(App);

const SocialNetApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>
}

export default SocialNetApp;