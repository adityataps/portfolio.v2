import React, { useState, useEffect, useRef } from 'react';
import { Element, scroller } from 'react-scroll';
import styles from './App.module.scss';
import './common/styles.scss';

import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import NavBar from './common/components/NavBar'
import ScrollView from './common/components/ScrollView'

// const routes = [
//   "/",
//   "/about",
//   "/blog",
//   "/experiences",
//   "/resume", 
//   "/contact",
// ]

function App() {
  const observer = useRef<IntersectionObserver | null>(null);

  const [currScrollView, setCurrScrollView] = useState<string | null>(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrScrollView(entry.target.id);
          const newRoute = `#${entry.target.id}`
          window.history.replaceState(null, null, newRoute);
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
    const elementsToObserve = document.getElementsByClassName(styles.scrollViewComponent);

    // Start observing each element
    Object.values(elementsToObserve).forEach((element) => {
      observer.current?.observe(element);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.current?.disconnect();    };
  }, []); // The empty dependency array ensures this effect runs once after initial render

  console.log(currScrollView);

  return (
    <div className={styles.viewsContainer}>
      <NavBar currRoute={currScrollView} />
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/"
        color="pink"
        height="calc(100vh - 128px)"
      >
        <Home />
      </ScrollView>
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/about"
        color="lightgreen"
      >
        <About />
        </ScrollView>
      <ScrollView
        classNames={styles.scrollViewComponent}
        id="/blog"
        color="lightblue"
      >
        <Blog />
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

export default App
