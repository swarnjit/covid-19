import axios from "axios";

const fetchURL = "https://covid-193.p.rapidapi.com/statistics";
const host = "covid-193.p.rapidapi.com";
const key = "8529a60fe1msh86abdd1bb20286cp190477jsnc68714d9e22c";
const urlForCountry = "https://covid19.mathdro.id/api";

export const fetchDataCountry = async (country) => {
  let countryDataUrl = urlForCountry;

  if (country) {
    countryDataUrl = `${urlForCountry}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(countryDataUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDataGlobal = async () => {
  try {
    const result = await axios(fetchURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": host,
        "x-rapidapi-key": key,
      },
    });

    return result.data;
  } catch (error) {
    return error;
  }
};
