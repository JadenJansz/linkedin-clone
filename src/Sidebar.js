import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src='https://i.pinimg.com/originals/a3/af/35/a3af356c5d57a46a1abdf37421ce3ac3.jpg' alt='' />
                <Avatar className='sidebar__avatar' />
                <h2>Jaden Jansz</h2>
                <h2>jadenajansz@gmail.com</h2>
            </div>

            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who viewed you</p>
                    <p className='sidebar__statNumber'>2543</p> 
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2543</p>                   
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar;
