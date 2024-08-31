import fs from "fs";
import path from "path";
import axios from "axios";
import OpenAi from "openai";

import {
  IPINFO_BASE_URL,
  OPENWEATHERMAP_BASE_URL,
  FALLBACKS,
} from "./constants";
import { isPrivateIp } from "../../common/utils";

export const getLocation = async (ip: string): Promise<IpLocation> => {
  if (!process.env.IPINFO_IO_API_KEY)
    throw new Error("No IPInfo API key found");
  if (!ip) throw new Error("No IP address found from API request");

  const ipinfoBaseUrl = new URL(IPINFO_BASE_URL);
  ipinfoBaseUrl.pathname = isPrivateIp(ip) ? "/json" : `/${ip}/json`;
  ipinfoBaseUrl.searchParams.set(
    "token",
    process.env.IPINFO_IO_API_KEY as string
  );
  const response = await axios.get(ipinfoBaseUrl.href);

  const { city, region, country, loc }: ipInfoResponse = response.data;

  const [lat, long] = loc.split(",").map(Number);
  const units = country === "US" ? "imperial" : "metric";
  const locationObject: IpLocation = {
    city,
    region,
    country,
    units,
    loc: {
      lat,
      long,
    },
  };
  return locationObject;
};

export const queryOpenWeatherMapApi = async (
  props: OpenWeatherMapApiQuery
): Promise<Record<string, any>> => {
  const {
    latlong: { lat, long },
    units,
    dataType,
  } = props;
  if (!process.env.OPENWEATHERMAP_API_KEY)
    throw new Error("No OpenWeather API key found");
  if (isNaN(lat) || isNaN(long))
    throw new Error("Invalid latitude or longitude");
  if (!["current", "overview"].includes(dataType))
    throw new Error("Invalid endpoint");

  let apiUrl = new URL(OPENWEATHERMAP_BASE_URL);
  if (dataType === "current") {
    apiUrl.pathname += "/onecall";
    apiUrl.searchParams.set("exclude", "minutely,hourly,daily,alerts");
  } else {
    apiUrl.pathname += "/onecall/overview";
  }

  apiUrl.searchParams.set("lat", String(lat));
  apiUrl.searchParams.set("lon", String(long));
  apiUrl.searchParams.set("units", units);
  apiUrl.searchParams.set(
    "appid",
    process.env.OPENWEATHERMAP_API_KEY as string
  );

  const response = await axios.get(apiUrl.href);
  return response.data;
};

export const loadPromptFile = async (filePath: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(path.join(__dirname, filePath), "utf8", (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        console.warn(`Prompt file could not be loaded: `, err.message);
        reject("Prompt could not be loaded at this time.");
      }
    });
  });
};

// export const buildInputJson = async (): Promise<InputJson> => {};

// export const buildGptResponse = async (
//   inputJson: InputJson
// ): Promise<string> => {
//   const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });
//   const [systemPrompt, userPrompt] = await Promise.all([
//     loadPromptFile("./llm/systemPrompt.txt"),
//     loadPromptFile("./llm/userPrompt.txt"),
//   ]);

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "system",
//         content: systemPrompt,
//       },
//       {
//         role: "user",
//         content: userPrompt.replace("${inputJson}", JSON.stringify(inputJson)),
//       },
//     ],
//   });

//   return response.choices[0].message.content ?? "";
// };

// export const buildGptStream = async (inputJson: InputJson): gptStream => {
//   const openai = new OpenAi({ apiKey: process.env.OPENAI_API_KEY });
//   const [systemPrompt, userPrompt] = await Promise.all([
//     loadPromptFile("./prompts/systemPrompt.txt"),
//     loadPromptFile("./prompts/userPrompt.txt"),
//   ]);

//   const stream = await openai.chat.completions.create({
//     model: "gpt-4o",
//     messages: [
//       {
//         role: "system",
//         content: systemPrompt,
//       },
//       {
//         role: "user",
//         content: userPrompt.replace("${inputJson}", JSON.stringify(inputJson)),
//       },
//     ],
//     stream: true,
//   });

//   return stream;
// };

type Units = "imperial" | "metric";

type LatLong = {
  lat: number;
  long: number;
};

type ipInfoResponse = {
  city: string;
  region: string;
  country: string;
  loc: string;
};

type IpLocation = {
  city: string;
  region: string;
  country: string;
  loc: LatLong;
  units: Units;
};

type OpenWeatherMapApiQuery = {
  latlong: LatLong;
  units: Units;
  dataType: "current" | "overview";
};
