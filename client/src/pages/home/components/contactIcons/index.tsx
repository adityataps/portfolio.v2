import React, {useEffect} from "react";
import {At, LinkedinLogo, GithubLogo} from '@phosphor-icons/react';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import styles from './contactIcons.module.scss';



function ContactIcons() {

    



    return (
      <div id={styles.iconsContainer}>
        <OverlayTrigger
          placement="right"
          delay={{ show: 500, hide: 500 }}
          overlay={<Tooltip>aditya (at) tapshalkar.com</Tooltip>}
        >
          <a
            href="mailto:aditya@tapshalkar.com"
            className={styles.contactButton}
            target="_blank"
          >
            <At size={64} weight="duotone" />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 500, hide: 500 }}
          overlay={<Tooltip>@adityatapshalkar</Tooltip>}
        >
          <a
            href="https://www.linkedin.com/in/adityatapshalkar"
            className={styles.contactButton}
            target="_blank"
          >
            <LinkedinLogo size={64} weight="duotone" />
          </a>
        </OverlayTrigger>

        <OverlayTrigger
          placement="right"
          delay={{ show: 500, hide: 500 }}
          overlay={<Tooltip>@adityataps</Tooltip>}
        >
          <a
            href="https://www.github.com/adityataps"
            className={styles.contactButton}
            target="_blank"
          >
            <GithubLogo size={64} weight="duotone" />
          </a>
        </OverlayTrigger>
      </div>
    );
}


export default ContactIcons;
