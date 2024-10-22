import { ChatCompletionChunk } from "openai/resources/index.mjs";
import { Stream } from "openai/streaming.mjs";

export type LatLong = {
  lat: number;
  long: number;
};

export type Units = "imperial" | "metric";

export type IpLocation = {
  city: string;
  region: string;
  country: string;
  loc: LatLong;
  units: Units;
};

export type WeatherOverview = string | undefined;

export type InputJson = {
  currentDatetime: string;
  location: IpLocation;
  weatherOverview: WeatherOverview;
};

export type gptStream = Promise<Stream<ChatCompletionChunk>>; // TODO: update this type
