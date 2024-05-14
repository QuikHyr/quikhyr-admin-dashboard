import axios from "axios";

const apiInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_PROD_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;
