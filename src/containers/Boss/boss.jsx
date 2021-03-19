import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/actions'
import UserList from '../../components/user_list/userList'

class Boss extends Component {
    componentDidMount() {
        this.props.getUserList('Staff');
        
    }
    render() {
        return (
            <div>
                <UserList userList={ this.props.UserList }/>
            </div>
        )
    }
}


export default connect(
    state => ({ UserList: state.userList }),
    {
        getUserList
    }
)(Boss)