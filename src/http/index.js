import axios from "axios"

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

export const http = axios.create({
  baseURL: "http://localhost:8080",
  ...sessionStorage.getItem(ACCESS_TOKEN) && {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem(ACCESS_TOKEN)}`
    }
  }
})