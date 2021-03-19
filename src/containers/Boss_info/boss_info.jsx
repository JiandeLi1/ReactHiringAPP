import React, { useState, useEffect, useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import {  Redirect } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AvatarComp from '../../components/avatar_group/avatar'
import { updateUser } from '../../redux/actions'
import './boss_info.css';
import { ContactSupportOutlined } from '@material-ui/icons';
import PubSub from 'pubsub-js'


const useStyles = makeStyles((theme) => ({
  root: {
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export function BossInfo(props) {
  const avatarUrl = useRef(null);
  const [bossInfo, setBossInfo] = useState({
    avatar: '',
    position: '',
    company: '',
    salary: '',
    info: ''
  })
  const myRef = React.useRef()
  useEffect(() => {
     PubSub.subscribe('ava', (_, data) => {
       setBossInfo({ ...bossInfo, avatar: data.avatar });
      
    })
  })


  const saveInfo = () => {
    const { avatar, type } = bossInfo;
    
    if (avatar) {
    props.updateUser(bossInfo);
  }
  }

  const classes = useStyles();
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
                    <AvatarComp ref={ myRef }/>
                            <TextField
                      onChange={val => { setBossInfo({...bossInfo, position:val.target.value})}}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="position" label="Position"
                                required/>
                            <TextField
                                onChange={val => { setBossInfo({...bossInfo, company:val.target.value})}}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="companyName" label="Company Name"
                                required/>
                          <TextField
                            onChange={val => { setBossInfo({...bossInfo, salary:val.target.value})}}
                            style={{ margin: '10px 5px 0px 5px' }}
                            id="jobSalay"  label="Job Salary"
                                required />
                                <br />
                                <br />
                          <TextField
                            onChange={val => { setBossInfo({...bossInfo, info:val.target.value})}}
                            style={{ margin: '10px 5px 10px 5px' }}
                                    id="jobRequirements" 
                                    label="Job Requirements" 
                                    multiline="true"
                                    variant="outlined"
                                    rows={ 5 }
                            required/>
                            <br />
                            
                            
                    <Button
                      onClick={saveInfo}
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
)(BossInfo)