import React, { Component } from 'react';
import {NavLink,Route, Redirect} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'
import './register.css'
import Logo from '../../components/logo/logo'
import { connect } from 'react-redux'
import { register } from '../../redux/actions'
import Cookies from 'js-cookie'
import { getUser} from '../../redux/actions'


 
 class Register extends Component {
    state = {
        email:'',
        username: '',
        password: '',
        password2: '',
        type:'',
     }
     
    register = () => { 
        this.props.register(this.state);
    }



    handleChange = (name,val) => { 
        this.setState({
            [name]:val
        })
        console.log(this.state);
     }
     
     componentDidMount() {
        const userid = Cookies.get('userid');
         const { _id } = this.props.user
         
       
         if (userid && !_id) {
            this.props.getUser();
            setTimeout(()=>{
               const path = '/main/' +this.props.user.type+ 'Info'
                console.log(path);
               this.props.history.push(path);
            }, 750);
            
        }
     }
     
      
     
      
     render() {

         const userid = Cookies.get('userid');
          const { msg, redirectTo } = this.props.user
        
         
         if (redirectTo) {
             return <Redirect to={ redirectTo } />
         }

        
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
                             <div className='error-msg'> { msg ? msg : ''} </div>
                            <TextField
                                onChange={val => this.handleChange('email', val.target.value)}
                                style={{ margin: '10px 5px 0px 5px' }}
                                id="Email" label="Email"
                                inputProps={{pattern:'email'}} required/>
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
                            
                            <TextField
                                onChange={val => { this.handleChange('password2',val.target.value)}}
                        style={{  margin: '10px 5px 10px 5px' }}
                                id="password" type="password" label="Comfirm Password"
                            inputProps={{pattern:'[\w_-]{6,15}'}} required/>
                            <br />
                            
                            <RadioGroup
                            onChange={val => { this.handleChange('type',val.target.value)}}
                                row style={{ margin: '0 0 0 3rem' }}
                            required>
                                <FormLabel
                                style={{padding:'0.8rem 0.3rem 0 0' }}
                                >Your Type:</FormLabel>
                                <FormControlLabel value="Boss"  control={<Radio color='#3f51b5'/>} label="bass" />
                                <FormControlLabel value="Staff" control={<Radio color='#3f51b5'/>} label="staff" />
                            </RadioGroup>
                            <Button
                              onClick={this.register}
                            style={{ margin: '10px 5px 10px 5px'}}
                                variant="contained" color="primary">Sumbit</Button>
                            <br />
                            <NavLink to='/login'>I have a account</NavLink>
                            <br />
                            <br />
                            
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
    { register, getUser  },
    
)(Register)