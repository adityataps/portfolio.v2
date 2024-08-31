import React from 'react';
import styles from './ContentWrapper.module.scss';

function ContentWrapper(props) {
    return (
        <div className={`${styles.wrapper} ${props.id === '/' ? styles.landingPage : ''}`}>

            {props.children}

        </div>
    )
}

export default ContentWrapper;