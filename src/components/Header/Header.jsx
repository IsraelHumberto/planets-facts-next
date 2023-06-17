'use client'
import styles from './Header.module.scss'

const Header = ({ linksHeader }) => {

    const renderLinks = linksHeader.map((link, index) => (
        <button key={index}>
            {link.name}
        </button>
    ))

    return (
        <>
            <header className={styles.container}>
                <div className={styles.content}>
                    <div className={`${styles.logo} h2`}>
                        The Planets
                    </div>
                    <nav className={styles.nav}>
                        {renderLinks}
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header