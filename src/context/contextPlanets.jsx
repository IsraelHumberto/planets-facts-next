'use client'

import client from "@/sanity";

import { createContext, use, useContext, useEffect, useState } from "react";

const PlanetsContext = createContext({})

export const PlanetsContextProvider = ({ children }) => {
    const [planet, setPlanet] = useState([])
    const [text, setText] = useState('')
    const [imgPlanet, setImgPlanet] = useState('')
    const [imgSurface, setImgSurface] = useState('')
    const [activeTab, setActiveTab] = useState('01')
    const [wikipediaLink, setWikipediaLink] = useState('')

    const chooseTopic = (name) => {

        switch (name) {
            case 'overview':
                setText(planet.overview[0].content)
                setImgPlanet(planet.images[0].planet)
                setWikipediaLink(planet.overview[0].source)
                setImgSurface('')
            break;
            
            case 'structure':
                setText(planet.structure[0].content)
                setImgPlanet(planet.images[0].internal)
                setWikipediaLink(planet.structure[0].source)
                setImgSurface('')
            break;

            case 'geology':
                setText(planet.geology[0].content)
                setImgPlanet(planet.images[0].planet)
                setImgSurface(planet.images[0].geology)
                setWikipediaLink(planet.geology[0].source)
            break;
            
            default:
                ''
        }
    }

    const choosePlanet = async (planet) => {
        const findPlanet = await client.fetch(`*[_type == "planets" && name == '${planet}'][0]`)
        setPlanet(findPlanet)
        setActiveTab('01')
    }

    return (
        <PlanetsContext.Provider value={{ planet, setPlanet, chooseTopic, text, imgPlanet, imgSurface, choosePlanet, activeTab, setActiveTab, wikipediaLink }}>
            {children}
        </PlanetsContext.Provider>
    )
}

export const usePlanetsContext = () => useContext(PlanetsContext)