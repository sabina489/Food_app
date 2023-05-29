import React, { Fragment } from "react";
import AvailableMeal from "./AvailableMeal";
// import classes from './Available.module.css'
import MealsSummary from "./MealsSummary";
// import styles from './MealsSummary.module.css'

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeal/>

    </Fragment>
}

export default Meals;