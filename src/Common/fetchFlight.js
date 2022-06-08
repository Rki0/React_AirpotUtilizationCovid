import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const fromMonthBefore = 201801;
const toMonthBefore = 201912;
const fromMonthAfter = 202001;
const toMonthAfter = 202112;

const instance = axios.create({
  baseURL: `/getTotalNumberOfFlight?serviceKey=${API_KEY}&periodicity=0&domestic_foreign=I&type=json`,
});

instance.interceptors.response.use((response) => {
  console.log("instance interceptors response", response);
  if (response.data.status === "Error") {
    throw response;
  }
  return response;
});

export const onRequestBefore = async () => {
  try {
    console.log("Try to get Before Data");
    return await instance.get(
      `&from_month=${fromMonthBefore}&to_month=${toMonthBefore}`
    );
  } catch (e) {
    throw e.data;
  }
};

export const onRequestAfter = async () => {
  try {
    console.log("Try to get After Data");
    return await instance.get(
      `&from_month=${fromMonthAfter}&to_month=${toMonthAfter}`
    );
  } catch (e) {
    throw e.data;
  }
};
