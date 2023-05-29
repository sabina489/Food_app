import React from "react";
import classes from './Available.module.css'
import MealItem from "./MealItem";
// import UI from '../Cart/CartIcon'


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeal = () => {
    const MealList = DUMMY_MEALS.map(meal=><MealItem key={meal.id} name={meal.name} description={meal.describe} price={meal.price}/>);

    return <section className={classes.meals}>
        
        <ul>
            {MealList}
        </ul>
        

    </section>
}

export default AvailableMeal;