import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import { spacing } from '@material-ui/system';
import '../user_list/user_list.css'
import avatar from '../avatar_group/avatar';
import Avatar1 from '../avatar_group/avatar_imgs/avatar1.jpg'
import Avatar2 from '../avatar_group/avatar_imgs/avatar2.jpg'

class UserList extends Component {
    static propTypes = {
        userList: PropTypes.array.isRequired
    }
    render() {
        const { userList } = this.props
        return (
            <div className="body">
                {userList.map(user => (
                    <div key={user._id}>
                        <Card className='SingleInfo'
                            onClick={ ()=>this.props.history.push(`/main/chat/${user._id}`)}>
                    <div className='infoHead'>
                                    <Avatar
                                        className="userAvatar"
                                        src={user.avatar == "avatar1" ? Avatar1 : Avatar2} />
                        
                        <span className='userName'>
                                     { user.username}
                        </span>
                    </div>
                            {user.compamy ? <div>company: { user.company}</div> : null}
                            <div>Salary: { user.salary}</div>
                            <div>Information: { user.info}</div>
                    </Card>
                    </div>
                ))}

                
                
            </div>
        )
        
    }
}


export default withRouter(UserList)