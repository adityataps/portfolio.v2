import React, { useState, useEffect, useRef } from "react";
import { Element, scroller } from "react-scroll";
import styles from "./App.module.scss";
import "./common/styles.scss";

import Home from "@pages/home";
import About from "@pages/about";
import Blog from "@pages/blog";
import NavBar from "@common/components/navBar";
import ScrollView from "@common/components/scrollView";

function App() {
  const [currScrollView, setCurrScrollView] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const currentHashRef = useRef(window.location.hash);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newRoute = `#${entry.target.id}`;

          // Update the hash only if it has changed
          if (currScrollView !== newRoute) {
            setCurrScrollView(entry.target.id);
            currentHashRef.current = newRoute;
            window.history.replaceState(null, "", newRoute);
          }
        }
      });
    };

    // Create an IntersectionObserver
    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 1.0,
      rootMargin: "128px",
    });

    // Get a list of elements to observe (replace with your element IDs)
    const elementsToObserve = document.getElementsByClassName(
      styles.scrollViewComponent
    );

    // Start observing each element
    Object.values(elementsToObserve).forEach((element) => {
      observer.current?.observe(element);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.current?.disconnect();
    };
  }, []); // The empty dependency array ensures this effect runs once after initial render

  return (
    <div className={styles.viewsContainer}>
      <NavBar currRoute={currScrollView} />
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/"
        color="pink"
        height="calc(100vh - 128px)"
      >
        <Home isCurrRoute={currScrollView === "/"} />
      </ScrollView>
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/about"
        color="lightgreen"
      >
        <About isCurrRoute={currScrollView === "/about"} />
      </ScrollView>
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/blog"
        color="lightblue"
      >
        <Blog isCurrRoute={currScrollView === "/blog"} />
      </ScrollView>
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/experiences"
        color="gray"
      />
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/resume"
        color="lightyellow"
      />
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/contact"
        color="orange"
      />
    </div>
  );
}

export default App;
