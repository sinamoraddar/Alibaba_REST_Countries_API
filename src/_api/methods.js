import axios from "axios";
import { urls } from "./urls";

export const getCountryList = () => axios.get(urls.GET_ALL_COUNTRIES);
