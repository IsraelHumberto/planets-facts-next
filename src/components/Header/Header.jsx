'use client'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import { BsList, BsChevronRight } from 'react-icons/bs'
import { usePlanetsContext } from '@/context/contextPlanets'



const Header = ({ linksHeader }) => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const { choosePlanet } = usePlanetsContext()


    const renderLinksDesk = linksHeader?.map((link, index) => {
        return (
            <button key={index} className='h3' onClick={() => choosePlanet(link.name)}>
                {link.name}
            </button>
        )
    })
    const renderLinksMobile = linksHeader.map((link, index) => {
        return (
            <div key={index} className={styles.navItem} onClick={() => {
                choosePlanet(link.name)
                setOpenSidebar(false)
            }}>
                <button className='h3'>
                    <div>
                        <span className={styles.circle} style={{ background: link.color }}></span>
                        <span className={styles.text}>
                            {link.name}
                        </span>
                        <span className={styles.arrow}>
                            <BsChevronRight fontSize={12} color='#FFF' />
                        </span>
                    </div>
                </button>
            </div>
        )
    })

    const Sidebar = () => {
        return (
            <div
                className={`${styles.sidebar} ${openSidebar ? `${styles.active}` : ''}`}
            >
                <div className={styles.navMobile}>
                    {renderLinksMobile}
                </div>
            </div>
        )
    }

    return (
        <>
            <header className={styles.container}>
                <div className={styles.content}>
                    <div className={`${styles.logo}`}>
                        The Planets
                    </div>
                    <nav className={styles.navDesktop}>
                        {renderLinksDesk}
                    </nav>
                    <button className={styles.iconHamburguer}>
                        <BsList
                            fontSize={28}
                            color={'#FFF'}
                            onClick={() => setOpenSidebar(!openSidebar)}
                        />
                    </button>
                </div>
            </header>
            <Sidebar />
        </>
    )
}

export default Header