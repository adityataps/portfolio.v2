import React, { useEffect, useRef, useState } from "react";

import ContentWrapper from "../contentWrapper";

import styles from "./ScrollView.module.scss";

function ScrollView(props) {
  // const scrollViewRef = useRef(null);

  // const [isVisible, setIsVisible] = useState(false);

  // function callback(payloads) {
  //     console.log(payloads);

  //     const [ payload ] = payloads
  //     setIsVisible(payload.isIntersecting)
  // }

  // useEffect(() => {
  //     // const view = document.getElementById(props.id);

  //     const options = {
  //     root: null,
  //     threshold: 1.0,
  //     rootMargin: "0px",
  //     };

  //     const observer = new IntersectionObserver(callback, options);

  //     if (scrollViewRef.current) observer.observe(scrollViewRef.current);
  //     return () => {if (scrollViewRef.current) observer.disconnect()}

  // }, [])

  return (
    <div
      className={`${props.classNames} ${styles.scrollView}`}
      id={props.id}
      style={{ background: props.color, height: props.height || "100vh" }}
    >
      <ContentWrapper id={props.id}>{props.children}</ContentWrapper>
    </div>
  );
}

export default ScrollView;
