import Axios from "axios"

import { envConfig } from "@/config/envConfig"

const axios = Axios.create({
  baseURL: envConfig.apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": `application/json`,
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
})

export default axios
