'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.scss'
import { useEffect, useState } from 'react'
import { usePlanetsContext } from '@/context/contextPlanets'
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { Oval } from 'react-loader-spinner'

const Hero = ({ planets }) => {
    const { planet, setPlanet, text, chooseTopic, imgPlanet, setActiveTab, activeTab, wikipediaLink, imgSurface } = usePlanetsContext()

    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source)
    }

    useEffect(() => {
        setPlanet(planets)
    }, [])

    useEffect(() => {
        if (planet.overview) {
            chooseTopic('overview')
        }
    }, [planet.overview])



    const Tab = ({ number, title, name }) => (
        <button
            className={`${styles.tab}`}
            style={activeTab == number ? { backgroundColor: `${planet.color}`, border: `${planet.color}` } : {}}
            onClick={() => {
                setActiveTab(number)
                chooseTopic(name)
            }}>
            <div>
                <span className={`${styles.tabNumber} h3`}>{number}</span>
                <span className={`${styles.tabText} h3`}>{title}</span>
            </div>
        </button>
    )


    const Feature = ({ title, info, name }) => (
        <div className={styles.feature}>
            <div className={`${styles.titleFeature} h4`}>{title}</div>
            <div className={`${styles.dataFeature} h2`}>{info}</div>
        </div>
    )

    const TabMobile = ({ number, title, name }) => (
        <button
            className={`${styles.tabMobile}`}
            style={activeTab == number ? { borderBottom: `4px solid ${planet.color}` } : {}}
            onClick={() => {
                setActiveTab(number)
                chooseTopic(name)
            }}>
            <div>
                <span className={`${styles.tabMobileText} h3`}>{title}</span>
            </div>
        </button>
    )

    return (
        <>
        <section className={styles.hero}>
            {!!planet && !!imgPlanet ?
                <>
                    <div className={styles.tabsMobile}>
                        <TabMobile
                            number='01'
                            title='overview'
                            name='overview'
                            />
    
                        <TabMobile
                            number='02'
                            title='structure'
                            name='structure'
                        />
                        <TabMobile
                            number='03'
                            title='geology'
                            name='geology'
                        />
                    </div>
                    <div className={styles.heroContent}>
                        <div className={styles.main}>
                            <div className={styles.image}>
                                <Image src={urlFor(imgPlanet).url()} alt='planet' width={300} height={300} className={styles.imgPlanet}/>
                                {imgSurface &&
                                    <Image src={urlFor(imgSurface).url()} alt='planet' width={163} height={200} className={styles.imgGeology}/>
                                }
                            </div>
                            <div className={styles.infos}>
                                <div className={styles.info}>
                                    <h1>{planet?.name}</h1>
                                    <p className={styles.text}>{text}</p>
                                    <p className={styles.source}>
                                        <span>Source: </span>
                                        <Link href={wikipediaLink} target='_blank'> Wikipedia
                                        </Link>
                                    </p>
                                </div>
                                <div className={styles.tabs} id='tabs'>
                                    <Tab
                                        number='01'
                                        title='overview'
                                        name='overview'
                                    />
                                    <Tab
                                        number='02'
                                        title='internal structure'
                                        name='structure'
                                    />
                                    <Tab
                                        number='03'
                                        title='surface geology'
                                        name='geology'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.features}>
                            <Feature
                                title='rotation time'
                                info={planet.rotation}
                                name='rotation'
                            />
                            <Feature
                                title='revolution time'
                                info={planet.revolution}
                                name='revolution'
                            />
                            <Feature
                                title='radius'
                                info={planet.radius}
                                name='radius'
                            />
                            <Feature
                                title='average temp.'
                                info={planet.temperature}
                                name='temperature'
                            />
                        </div>
                    </div>
                </>
                : 
            <Oval 
                height={80}
                width={80}
                color="white"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4d5ba9"
                strokeWidth={2}
                strokeWidthSecondary={2}
                wrapperClass='loading'
            />}
        </section>
        <footer className={styles.footer}>
            <div>Made by: Israel Humberto Front-End Developer</div>
            <div className={styles.links}>
                <Link href='https://www.linkedin.com/in/israelhumberto/'>
                    <BsLinkedin fontSize={26} target='_blank' color='#0e76a8'/>
                </Link>
                <Link href='https://github.com/IsraelHumberto/planets-facts-next'>
                    <BsGithub fontSize={26} target='_blank' color='#0e76a8'/>
                </Link>
            </div>
        </footer>
        </>
    )
}

export default Hero