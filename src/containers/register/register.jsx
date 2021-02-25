import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import './register.css'
import Logo from '../../components/logo/logo'

 

export default class Register extends Component {
    render() {
        return (
            <div className="register_component">
                <form action="">
                    <Grid>
                    <Paper >
                        <div className="title">
                             <Typography align="center" variant="h6" >
                               Best Hire
                            </Typography> 
                        </div>
                            <Logo />
                        <TextField
                        style={{ margin: '10px 5px 0px 5px'}}
                            id="Email" label="Email"  />
                        <TextField style={{ margin: '10px 5px 0px 5px' }}
                            id="username" label="Username" />
                        <TextField
                        style={{ margin: '10px 5px 0px 5px' }}
                                id="password" type="password" label="Password"  />
                            
                        <TextField
                        style={{  margin: '10px 5px 10px 5px' }}
                                id="password" type="password" label="Comfirm Password" />
                            <br />
                            
                            <RadioGroup row style={{ margin: '0 0 0 3rem' }}>
                                <FormLabel
                                style={{padding:'0.8rem 0.3rem 0 0'}}
                                >Your Type:</FormLabel>
                                <FormControlLabel value="Boss"  control={<Radio />} label="bass" />
                                <FormControlLabel value="Staff" control={<Radio />} label="staff" />
                            </RadioGroup>
                        <Button
                            style={{ margin: '10px 5px 10px 5px'}}
                            variant="contained" color="primary">Sumbit</Button>
                    </Paper>
                 </Grid>
                </form>

            </div>
        )
    }
}
