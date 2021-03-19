import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ListIcon from '@material-ui/icons/List';
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import { connect, useDispatch, useSelector } from 'react-redux'
import {NavLink,Route, Redirect, useHistory} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});



export function NavFooter(props) {
  let history = useHistory();
    
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      
    >
      <BottomNavigationAction
        label={props.user.type == 'Boss' ? 'Staffes' : 'Companies'}
        icon={<ListIcon />}
        onClick={() => history.replace("/main/"+props.user.type)} />
      
      <BottomNavigationAction
        label="Chat" icon={<ChatIcon />}
        onClick={() => history.replace("/main/Message")} />
          
      <BottomNavigationAction label="Personal" icon={<PersonIcon />}
      onClick={() => history.replace("/main/PersonalInfo")} />
    </BottomNavigation>
  );
}

export default connect(
    state => 
        ({user:state.user}),
        {}
)(NavFooter)