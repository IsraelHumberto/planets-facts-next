'use client'

import { createContext, useContext, useState } from "react";

const PlanetsContext = createContext({})

export const PlanetsContextProvider = ({children}) => {
    const [allPlanets, setAllPlanets] = useState([])

    return (
        <PlanetsContext.Provider value = {{allPlanets, setAllPlanets}}>
            {children}
        </PlanetsContext.Provider>
    )
}

export const usePlanetsContext = () => useContext(PlanetsContext)