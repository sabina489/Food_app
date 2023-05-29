import React from "react";

import foodimages from '../../images/meals.jpg';
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h2>Food</h2>
            <button>Select</button>
            <HeaderButton/> 
             
        </header>

        <div className={classes['main-image']}>
            <img src={foodimages}/>
           
        </div>
       

    </React.Fragment>

}

export default Header;