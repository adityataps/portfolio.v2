import React, { createContext, useContext } from "react";
import axios, { AxiosInstance } from "axios";
import { CustomProvider } from "@types/customProvider";

const AxiosContext = createContext<AxiosInstance>(axios.create());

export const AxiosProvider = ({ children }: CustomProvider) => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  });

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

// Custom hook to use the axios instance
export const useAxios = (): AxiosInstance => useContext(AxiosContext);
