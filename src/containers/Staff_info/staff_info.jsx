import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AvatarComp from '../../components/avatar_group/avatar'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './staff_info.css';
import { updateUser } from '../../redux/actions'
import PubSub from 'pubsub-js'



export function StaffInfo (props){

  const [staffInfo, setStaffInfo] = useState({
    avatar: '',
    position: '',
    salary: '',
    info: '',
  })
 useEffect(() => {
     PubSub.subscribe('ava', (_, data) => {
       setStaffInfo({ ...staffInfo, avatar: data.avatar });
      
    })
  })


  const saveInfo = () => {
    const { avatar, type } = staffInfo;
    
    if (avatar) {
    props.updateUser(staffInfo);
  }
  }

  const { avatar, type } = props.user;
  if (avatar) {
    const path = type === 'Staff' ? '/main/Staff' : '/main/Boss'
    console.log(avatar);
    console.log(path);
    return <Redirect to={ path } />
  }

  
        return (
            <div className="register_component">
                <form action="">
                    <Grid>
                        <Paper >
                            <div class="inside">
                                <div className="title">
                             <Typography align="center" variant="h6" >
                               Your Information
                            </Typography> 
                        </div>
                    <div>
                      <AvatarComp />
        </div>
                            <TextField
                                onChange={val => { setStaffInfo({...staffInfo, position:val.target.value})}}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="workPosition" label="Work Position"
                                    required />
                                
                            <TextField
                                 onChange={val => { setStaffInfo({...staffInfo, salary:val.target.value})}}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="salaryRequirements" label="Salary Requirements"
                                    required />
                                
                                <br />
                                <br />
                    <TextField
                      onChange={val => { setStaffInfo({...staffInfo, info:val.target.value})}}
                            style={{ margin: '10px 5px 10px 5px' }}
                                    id="selfIntroduction" 
                                    label="Self Introduction" 
                                    multiline="true"
                                    variant="outlined"
                                    rows={ 5 }
                            required/>
                            <br />
                            
                            
                            <Button
                      onClick={ saveInfo }
                            style={{ margin: '10px 5px 10px 5px'}}
                            variant="contained" color="primary">Sumbit</Button>
                            <br />
                            </div>
                    </Paper>
                 </Grid>
                </form>

            </div>
        )
    }


export default connect(
     state => 
        ({user:state.user}),
        {updateUser}
)(StaffInfo)
