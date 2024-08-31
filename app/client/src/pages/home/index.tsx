import React, { useState, useEffect, useRef } from "react";

import styles from "./Home.module.scss";
// import ContactIcons from "./components/contactIcons";

import { useAxios } from "../../context/axiosProvider";
import { Page } from "../../common/types";

//TODO: add sticky behavior for icons?

const getLocalStorageWelcomeData = (): Record<string, any> | null => {
  const localStorageWelcomeDataString: string | null =
    localStorage.getItem("home/welcomeData");

  if (!localStorageWelcomeDataString) return null;

  const localStorageWelcomeData = JSON.parse(localStorageWelcomeDataString);
  const { welcomeTextTemplate, updatedAt, params } = localStorageWelcomeData;

  const currentTs = Date.now();
  const updatedTs = Date.parse(updatedAt);
  return currentTs - updatedTs >= 3600 * 1000
    ? null
    : { welcomeTextTemplate, params };
};

const setLocalStorageWelcomeData = ({
  welcomeTextTemplate,
  updatedAt,
  params,
}: LocalStorageWelcomeData) => {
  localStorage.setItem(
    "home/welcomeData",
    JSON.stringify({ welcomeTextTemplate, updatedAt, params })
  );
};

function Home({ isCurrRoute }: Page) {
  const axios = useAxios();
  const [welcomeData, setWelcomeData] = useState<Record<string, any> | null>(
    null
  );
  const [welcomeText, setWelcomeText] = useState<string>("");
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );
  const [currentTime, setCurrentTime] = useState<string>(
    new Date().toLocaleTimeString("en-US")
  );

  useEffect(() => {
    let fetchedWelcomeData =
      getLocalStorageWelcomeData() as LocalStorageWelcomeData;
    if (fetchedWelcomeData) return () => setWelcomeData(fetchedWelcomeData);
    try {
      axios
        .get("/api/home", {
          params: { currentDatetime: new Date().toLocaleString("en-US") },
        })
        .then((res) => {
          fetchedWelcomeData = res.data;
          setLocalStorageWelcomeData(fetchedWelcomeData);
          setWelcomeData(fetchedWelcomeData);
        });
    } catch (error: any) {
      console.error("Could not fetch welcome text: ", error.message);
    }

    debugger;
  }, []);

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(
        new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
      setCurrentTime(new Date().toLocaleTimeString("en-US"));
    }, 1000);
  });

  useEffect(() => {
    if (welcomeData) {
      let welcomeTextTemplate = welcomeData?.welcomeTextTemplate;
      setWelcomeText(
        welcomeTextTemplate
          .replace(
            "{{temperatureValue}}",
            welcomeData?.temperatureValue === "imperial" ? "C" : "F"
          )
          .replace("{{temperatureUnit}}", welcomeData?.temperatureUnit)
          .replace("{{currentDate}}", currentDate)
          .replace("{{currentTime}}", currentTime)
      );
    }
  }, [welcomeData, currentDate, currentTime]);

  return (
    <div className={styles.titleText}>
      {/* TODO: Add placeholder until text loads */}
      <h1 className={styles.actualText}>{welcomeText}</h1>
    </div>
  );
}

type LocalStorageWelcomeDataParams = {
  temperatureValue: number;
  temperatureUnit: string;
};

type LocalStorageWelcomeData = {
  welcomeTextTemplate: string;
  params: LocalStorageWelcomeDataParams;
  updatedAt: string;
};

export default Home;
