import React, { useState } from 'react';

const MealsContext = React.createContext();

const todaysMeals = ["Bakedbeans","chickenroll","bakedpizza"]

const MealsProvider = ({children}) => {
  const[meals, setMealsList] = useState(todaysMeals);

  return (
    <MealsContext.Provider value={{meals}}>
      {children}
    </MealsContext.Provider>
  )
}

export const useMealsListContext = () => React.useContext(MealsContext)

export default MealsProvider