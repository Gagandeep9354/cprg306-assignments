"use client"

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient); 
        if (mealIdeas) {
            const newMeals = mealIdeas.map(mealIdea => mealIdea.strMeal);

            setMeals([...newMeals]);
        } else {
            setMeals([]);
        }
    }
    useEffect(() =>{
        loadMealIdeas(ingredient)
    }, [ingredient]);
    
    return (
        <div>
            {ingredient != "" ? ((meals.length != 0) ? (
            meals.map((meal) => (
                <li className="list-none bg-slate-900 m-1 p-1 max-w-sm hover:bg-orange-700">{meal}</li>
            ))) : <p className="text-xl font-bold">No meal ideas found for {ingredient}</p>) : <p className="text-xl font-bold">Select an item to see meal ideas</p>
            }
        </ div>
    );
}

export default MealIdeas