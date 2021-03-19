import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
import { resetUser } from '../../redux/actions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { sizing } from '@material-ui/system';
import Avatar1 from '../../components/avatar_group/avatar_imgs/avatar1.jpg'
import Avatar2 from '../../components/avatar_group/avatar_imgs/avatar2.jpg'
import '../PersonalInfo/personalInfo.css'

class PersonalInfo extends Component {
    logout = () => {
        Cookies.remove('userid');
        this.props.resetUser();
        this.props.history.replace("/");
    }
    render() {
        return (
            <div>
                <div className="avatar">
                    <Avatar style={{ width: "100px", height: '100px'}}
                    alt="Avatar"
                    src={this.props.user.avatar == "avatar1" ? Avatar1 : Avatar2} />
                </div>
                <Card  className="information">
                        <h3>Information</h3>
                        {this.props.user.company ? <div>Company: {this.props.user.company}</div> : null}
                        <div>Position: {this.props.user.position}</div>
                        <div>Salary: {this.props.user.salary}</div>
                        <div>Information: {this.props.user.info}</div>
                      
                </Card>
                

                <Button
                    onClick={this.logout}
                    style={{ margin: '20px 0px 0px 122px'}}
                    variant="contained" color="primary">
                    Logout
                </Button>
               
                
                
            </div>
        )
    }
}


export default connect(
    state => ({ user: state.user }),
    {resetUser}
)(PersonalInfo)