"use client"

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}

const fetchMealIngredients = async(strMeal) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`);
    const data = await response.json();
    return data.meals[0];
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [mealIngredients, setMealIngredients] = useState([]);
    const [ingredientMeasure, setIngredientMeasure] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient); 
        if (mealIdeas) {
            const newMeals = mealIdeas.map(mealIdea => mealIdea.strMeal);
            setMeals([...newMeals]);
        } else {
            setMeals([]);
        }
    }

    const loadMealIngredients = async (strMeal) => {
        const loadMealIngredients = await fetchMealIngredients(strMeal);
        const ingredients = [];
        const measureArray = [];
        if (loadMealIngredients) {
            for (let i = 1; i <= 20; i++) {
                const ingredient = loadMealIngredients[`strIngredient${i}`];
                const measure = loadMealIngredients[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(ingredient);
                    measureArray.push(measure);
                    setMealIngredients(ingredients);
                    setIngredientMeasure(measureArray);
                    setSelectedMeal(strMeal);
                }
            }
        } else {
            setIngredientMeasure([]);
            setMealIngredients([]);
        }


    }
    useEffect(() =>{
        loadMealIdeas(ingredient)
    }, [ingredient]);

    console.log(mealIngredients);
    
    return (
        <div>
            {ingredient !== "" ? (
                meals.length !== 0 ? (
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal} className="list-none bg-slate-900 m-1 p-1 max-w-sm hover:bg-orange-700">
                                <div  onClick={() => loadMealIngredients(meal)}>
                                    {meal}
                                </div>
                                {selectedMeal === meal && mealIngredients.length > 0 && (
                                    <div className="text-gray-400 text-xs ml-1">
                                        <p>Ingredients needed: </p>
                                        <ul>
                                            {mealIngredients.map((mealIngredient, index) => (
                                                <li key={index} className='ml-5'>{mealIngredient} (
                                                    <span>{ingredientMeasure[index]}</span>
                                                )</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : <p className="text-xl font-bold">No meal ideas found for {ingredient}</p>) : <p className="text-xl font-bold">Select an item to see meal ideas</p>
            }
        </ div>
    );
}

export default MealIdeas