import React, { useState } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
 
import axios from 'axios';
import avatar1 from '../avatar_group/avatar_imgs/avatar1.jpg'
import avatar2 from '../avatar_group/avatar_imgs/avatar2.jpg'

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
  sel: {
    margin: '0px 30px 0px 20px',
  },
  large: {
    display: 'inline-block',
    margin: '15px 30px 0px 20px',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  radio: {
    '&$checked': {
      color: '#3f51b5'
    }
  },
  checked: {},
}));


function AvatarC() {
    const classes = useStyles();
    const [avatar, setAvatar] = useState(null);
    // const fileChange = event => {
    //     let img=URL.createObjectURL(event.target.files[0]);
    //     setAvatar(img);
    // }
  const show=(val)=>{
    setAvatar(val.target.value);
    PubSub.publish('ava', { avatar:val.target.value });

  }

  
    
    return (
      <div>
            <Avatar 
              src={avatar1}
                className={classes.large} />
            <Avatar 
              src={avatar2}
              className={classes.large} />
        <div className={classes.root}>
          
            <RadioGroup row
            onChange={val => {show(val) }}>
            <FormControlLabel
              value="avatar1"
              control={<Radio
              classes={{root: classes.radio, checked: classes.checked}}/>}
              className={classes.sel}/>
            <FormControlLabel
              value="avatar2"
              control={<Radio
              classes={{root: classes.radio, checked: classes.checked}}/>}
              className={classes.sel}/>
            </RadioGroup>
          
                {/* <input
                    onChange={ fileChange }
                    accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                </IconButton>
                </label> */}
            </div>
            <label htmlFor="">Avatar</label>

        </div>)
}


const AvatarComp = (props, ref) => (
  <div ref={ref}> 
    <AvatarC />
  </div>
)

export default React.forwardRef(AvatarComp);