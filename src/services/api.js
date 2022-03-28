import axios from "axios";

const api = axios.create({
  baseURL: "https://clinicasaude-bff.herokuapp.com/",
});

export default api;
