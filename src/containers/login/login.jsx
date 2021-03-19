import React, { Component } from 'react';
import {NavLink,Route, Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Logo from '../../components/logo/logo'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'

import './login.css'
class Login extends Component {
    state = {
        username: '',
        password: '',
    }

  
    login = () => { 
        this.props.login(this.state);
    }

   


    handleChange = (name,val) => { 
        this.setState({
            [name]:val
        })
    }
    render() {
         const { msg, redirectTo } = this.props.user
         if (redirectTo) { 
             return <Redirect to={ redirectTo } />
         }
        return (
            <div className="login_component">
                <form action="">
                    <Grid>
                        <Paper className="inside">
                       
                            <div className="title">
                             <Typography align="center" variant="h6" >
                               Best Hire
                            </Typography> 
                        </div>
                            <Logo />
                            <div className='error-msg'> { msg ? msg : ''} </div>
                            <TextField
                                 onChange={val => { this.handleChange('username',val.target.value)}}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="username" label="Username"
                            inputProps={{pattern:'[\w_-]{4,15}'}} required/>
                            <TextField
                                 onChange={val => { this.handleChange('password',val.target.value)}}
                        style={{ margin: '10px 5px 0px 5px' }}
                                id="password" type="password" label="Password"
                             inputProps={{pattern:'[\w_-]{6,15}'}} required/>
                            
                            <br />
                            <br />
                            <Button
                                onClick={ this.login}
                            style={{ margin: '10px 5px 10px 5px'}}
                                variant="contained" color="primary">Login</Button>
                            <br />
                            <br />
                            <NavLink to='/'>I don't have a account</NavLink>
                            <br />
                            <br />
                            <div id='length'></div>        
                      
                        
                            
                    </Paper>
                 </Grid>
                </form>

            </div>
        )
    }
}


export default connect(
    state => ({
        user: state.user
    }),
    {login}
)(Login)