import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import BossInfo from '../Boss_info/boss_info'
import StaffInfo from '../Staff_info/staff_info'
import Cookies from 'js-cookie'
import Staff from '../Staff/Staff'
import Boss from '../Boss/boss'
import Message from '../Message/message'
import PersonalInfo from '../PersonalInfo/personalInfo'
import NotFound from '../../components/nonFound/nonFound'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import NavFooter from '../../components/navFooter/Nav_Footer'
import '../main/main.css'
import Chat from '../chat/chat'

class Main extends Component {
    navList = [
        {
            path: '/main/Boss',
            component: Boss,
            title: 'Staff List',
            icon: 'Staff',
            text: 'Staff'
        },
        {
            path: '/main/Staff',
            component: Staff,
            title: 'Company List',
            icon: 'Company',
            text: 'Company'
        },
        {
        path: '/main/Message', 
        component: Message,
        title: 'Message',
        icon: 'message',
        text: 'message',
        },
        {
        path: '/main/PersonalInfo', // 路由路径
        component: PersonalInfo,
        title: 'Personal Information',
        icon: 'personal',
        text: 'Personal',
        }
        ]

    render() {
    //    const userid = Cookies.get('userid');
    //     if (!userid) {
    //         return <Redirect to='/login'/>
    //     } 
        const { navList } = this
        const path = this.props.location.pathname
        const curr = navList.find(nav => nav.path === path)
        if (curr) {
            if (this.props.user.type === 'Boss') {
               navList[1].hide=true
            }
            else {
               navList[0].hide=true
            }
         }

        return (
            <div>
                <div className='Head'>
                    {curr ? <Box>{ curr.title } </Box> : null}
                </div>
                
                <div className="mid">
                    <Switch>
                    {
                        navList.map(nav => <Route path={nav.path} component={ nav.component} />)
                    }
                    <Route path='/main/BossInfo' component={ BossInfo } />
                    <Route path='/main/StaffInfo' component={StaffInfo} />
                    <Route path='/main/chat/:userid' component={ Chat } />
                    <Route component={ NotFound } />
                </Switch>
                </div>
                
                <div className="bottom">
                    {curr ? <NavFooter className='bottom' /> : null}
                </div>
                    
                
                
            </div>
        )
    }
}

export default connect(
    state => ({
        user:state.user
    })
)(Main)

