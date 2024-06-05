"use client";

import { useLocation } from "@/hooks";
import { fetchWeather } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import { WeatherInfo } from "./WeatherInfo";

const WeatherLocation = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [locationData, locationLoading, locationError] = useLocation();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetch = useCallback(async () => {
    try {
      const data = await fetchWeather(locationData);
      setData(data);
    } catch (err) {
      setErrorMessage("Unable to get the weather");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [locationData]);

  useEffect(() => {
    if (locationLoading) return;
    if (locationError) {
      setErrorMessage("Unable to get your location");
      setIsError(true);
      setIsLoading(false);
      return;
    }
    fetch();
  }, [locationData, locationLoading, locationError, fetch]);

  return (<div className="card rounded-lg relative h-32 border border-blue-600 bg-neutral-50">
    {isLoading && <div className="md:w-96 size-full animate-pulse grid place-content-center"> <div className="size-4 rounded bg-blue-600 animate-spin"></div></div>}
    {isError && <div className="md:w-96 grid place-content-center size-full"> <h1 className="uppercase text-red-700 text-sm font-medium">{errorMessage}</h1> </div>}
    {data && <WeatherInfo weather={data}/> }
    <small 
      className="text-xs font-medium uppercase text-white bg-blue-600 rounded absolute top-0 right-1/2 py-1.5 px-2 transform translate-x-1/2 -translate-y-1/2 ">
      Client
    </small>
  </div>);
};

export default WeatherLocation;
