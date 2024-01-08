import React from 'react';

import styles from './Home.module.scss';
import ContactIcons from './components/contactIcons';

//TODO: add sticky behavior for icons? 

function Home() {
    return (
        <div className={styles.titleText}>
            <ContactIcons />
            <h1 className={styles.actualText}> Aditya Tapshalkar, <br /> developer </h1>
        </div>
    )
}

export default Home;
