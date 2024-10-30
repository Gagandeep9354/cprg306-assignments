"use client"

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    console.log(data.meals);
}

function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const loadMealIdeas = async () => {
        const url = await fetchMealIdeas(ingredient); 
    }
    useEffect(() =>{
        loadMealIdeas(ingredient)
    }, [ingredient]);
    
    return (
        <>
        </>
    );
}

export default MealIdeas