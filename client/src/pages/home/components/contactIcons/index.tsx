import React, {useEffect} from "react";
import {At, LinkedinLogo, GithubLogo} from '@phosphor-icons/react';

import styles from './contactIcons.module.scss';



function ContactIcons() {

    return (
        <div id={styles.iconsContainer}>
            <At size={64} weight="duotone" />
            <LinkedinLogo size={64} weight="duotone" />
            <GithubLogo size={64} weight="duotone" />
        </div>
    )
}


export default ContactIcons;
