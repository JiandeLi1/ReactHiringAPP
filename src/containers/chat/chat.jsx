import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import './chat.css'

class Chat extends Component {
    render() {
        return (
            <div>
               
                    <Paper className="other"> 
                    Hi
                    </Paper>
                
                
                    <Paper className="other"> 
                    Hi
                    </Paper>
                
                
                    
                
               
                    <Paper className="me"> 
                    Hi
                    </Paper>
                <Paper className="me"> 
                     Hi
                    </Paper>
               
                
                    
               
                    
                
                

            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(Chat)