import React from 'react';
import styles from './ScrollView.module.scss';

function ScrollView(props) {



    return (
        <div className={styles.scrollView} id={props.id} style={{background: props.color, height: props.height || "100vh"}}>

            {props.children}

        </div>
    )
}

export default ScrollView;