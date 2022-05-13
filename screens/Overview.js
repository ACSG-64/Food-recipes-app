import {useLayoutEffect} from "react";

import {CATEGORIES, MEALS} from "../data/dummy-data";

import FoodList from "../components/FoodList/FoodList";

export default function Overview({route, navigation}) {
    const {categoryId} = route.params; // Get the categoryId from the params

    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title; // Find the title of the categoryId
    // Set the title of the screen dynamically once the component is loaded
    useLayoutEffect(
        () => navigation.setOptions({title: `${categoryTitle} recipes`}),
        [categoryId, navigation]
    );

    // Find the meals on the category
    const meals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <FoodList data={meals}/>
    );
}

