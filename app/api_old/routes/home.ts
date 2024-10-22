import express, { Request, Response } from "express";
import {
  // getWeatherOverview,
  // buildInputJson,
  // buildGptResponse,
  // buildGptStream,
  getLocation,
  queryOpenWeatherMapApi,
} from "../services/home";
import { extractIp } from "../common/utils";
import { InputJson, IpLocation } from "../services/home/types";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { fallbacks } from "../services/home/constants";

// Express Router
const router = express();
router.get("/", async (req: Request, res: Response) => {
  const currentDatetime = req.query.currentDatetime?.toString();

  let clientIp: string = "";
  try {
    clientIp = extractIp(req?.socket?.remoteAddress);
  } catch (error) {
    console.error("Could not extract IP address from request.");
  }

  let location: IpLocation = {
    city: "",
    region: "",
    country: "",
    loc: {
      lat: NaN,
      long: NaN,
    },
    units: "imperial",
  };
  try {
    location = await getLocation(clientIp);
  } catch (error) {
    console.error("Could not get location from IP address.");
  }

  let [currentWeather, weatherOverview]: [
    Record<string, any>,
    Record<string, any>
  ] = await Promise.allSettled([
    queryOpenWeatherMapApi({
      latlong: location.loc,
      units: location.units,
      dataType: "current",
    }),
    queryOpenWeatherMapApi({
      latlong: location.loc,
      units: location.units,
      dataType: "overview",
    }),
  ]);

  const inputJson: InputJson = {
    currentDatetime,
    location,
    currentWeather,
    weatherOverview,
  };

  console.log(inputJson);

  // TODO: Call llm here

  const welcomeData: WelcomeData = {
    currentDatetime,
    welcomeTextTemplate:
      "Current date is {{currentDate}}; Current time is {{currentTime}}",
    params: {
      temperatureValue: currentWeather?.value?.current?.temp,
      temperatureUnit: weatherOverview?.value?.units,
    },
  };

  return res.json(welcomeData);
});

type InputJson = {
  currentDatetime: string | undefined;
  location: IpLocation;
  currentWeather: Record<string, any>;
  weatherOverview: Record<string, any>;
};

type WelcomeDataParams = {
  temperatureValue: number;
  temperatureUnit: string;
};

type WelcomeData = {
  currentDatetime: string | undefined;
  params: WelcomeDataParams;
  welcomeTextTemplate: string;
};

export { router };
