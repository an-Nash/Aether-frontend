import React from 'react'
import PersonIcon from "@material-ui/icons/Person";
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css";


function Header() {
    return (
        <div className='header'>
            <IconButton >
            <PersonIcon  fontSize='large' className='header__icon'/>
            </IconButton>

            <img className='header__logo' src='https://globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png' alt='' 
            />
            <IconButton >
            <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
        </div>
    )
}

export default Header
