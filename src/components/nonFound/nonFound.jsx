import React, { Component } from 'react'
import Button from '@material-ui/core/Button';



class NotFound extends Component {
    render() {
        return (
            <div>
                <h2>Sorry!!! Doesn't find any information! Try it later!</h2>
                <Button
                    onClick={() => this.props.history.replace("/")}
                style={{ margin: '10px 5px 10px 5px'}}
                variant="contained" color="primary">
                    Back
                </Button>
                 
            </div>
        )
    }
}


export default NotFound;