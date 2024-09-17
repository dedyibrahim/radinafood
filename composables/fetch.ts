import {  H3Event } from "h3";

export const fetchData = async (
  event: H3Event,
  url: string,
  methode: string,
  payload: any
) => {

    try {
    const config = useRuntimeConfig();

    const baseUrl = config.public.apiBase;
    const fullUrl = `${baseUrl}${url}`;

    const headers = {
      Authorization: "Bearer " + localStorage.getItem("token"),
    };

    const res = await $fetch.raw(fullUrl, {
      method: methode as any,
      headers,
      body: payload,
    });

    return res._data;
  } catch (error) {

  }
};



