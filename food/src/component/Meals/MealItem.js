import React from "react";

import classes from './MealItem.module.css'

const MealItem = (props) => {
    return <li>
         <div className={classes.meal}>
            <h3 className={classes.name}>{props.name}</h3>
         </div>
         <div className={classes.describe}>{props.describe}</div>
         <div className={classes.price}>{props.price}</div>
        

    </li>
}

export default MealItem;