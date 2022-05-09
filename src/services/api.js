import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5001/",
  // "https://clinicasaude-bff.herokuapp.com/",
});

export default api;
