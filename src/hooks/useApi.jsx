// hooks/useApi.jsx
import { useState } from "react";
import axios from "axios";
import { useLoaderStore } from "../store/useLoaderStore";

const client = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "",
});

const getToken = () => localStorage.getItem("accessToken");

export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const setLoading = useLoaderStore.getState().setLoading;

  const getData = async (endpoint, options) => {
    setLoading(true);
    setError(null);
    try {
      const headers = {
        "Content-Type": "application/json",
      };

      // if (options?.isTokenRequired !== false) {
      //   headers.Authorization = `Bearer ${getToken()}`;
      // }

      const res = await client.get(endpoint, { headers });
      setResponse(res.data);
      options?.onSuccess?.(res.data);
    } catch (err) {
      setError(err);
      options?.onError?.(err);
    } finally {
      setLoading(false);
    }
  };

  const postData = async (endpoint, dataObj, options) => {
    setIsLoading(true);
    setError(null);
    setLoading(true);
    try {
      const headers = {
        "Content-Type": options?.isFormData
          ? "multipart/form-data"
          : "application/json",
      };

      // if (options?.isTokenRequired !== false) {
      //   headers.Authorization = `Bearer ${getToken()}`;
      // }

      const res = await client.post(endpoint, dataObj, { headers });
      setResponse(res.data);
      options?.onSuccess?.(res.data);
    } catch (err) {
      setError(err);
      options?.onError?.(err);
    } finally {
      setIsLoading(false);
      setLoading(false);
    }
  };

  return { isLoading, response, error, getData, postData };
};
