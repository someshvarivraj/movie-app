import { API_KEY, BASE_URL } from "../utils/constants";
import axios from "axios";

export const FetchApi = async (seachValue, year) => {
  console.log("fetch Api call");

  const params = {
    s: seachValue,
    apikey: API_KEY,
  };
  if (year) {
    params.y = year;
  }

  try {
    // const response = await fetch(
    //   `https://omdbapi.com/?s=${params.s}&apikey=${params.apikey}`
    // );
    // const responseJson = await response.json();

    const response = await axios.get(`${BASE_URL}`, { params });
    console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error);
    throw error;
  }
};
