// frontend/src/api/api.js
import axios from "axios";

// Set base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export default axios;
