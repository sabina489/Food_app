import React from "react";
import classes from './HeaderButton.module.css'
import CartIcon from "../Cart/CartIcon";

const HeaderButton = props => {

    return <button className={classes.button}>
        <span>
            <CartIcon/>
        </span>
        <span className={classes.icom}>Cart</span>
        <span className={classes.badge}>5</span>

    </button>
}

export default HeaderButton;