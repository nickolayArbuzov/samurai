import React from 'react';
import { 
  follow, 
  unfollow, 
  setCurrentPage, 
  toggleFollowingProgress,
  requestUsers
} from '../../redux/usersReducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';
import { 
  getUsers, 
  getPageSize, 
  getTotalUsersCount, 
  getCurrentPage, 
  getIsFetching, 
  getFollowingInProgress, 
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount(){
        this.props.requestUsers(this.props.Page, this.props.pageSize);
    }
    
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render(){
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount = {this.props.totalUsersCount} 
                    pageSize = {this.props.pageSize}
                    Page = {this.props.Page}
                    onPageChanged = {this.onPageChanged}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                    followingInProgress = {this.props.followingInProgress}
            /> 
        </>
    }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)