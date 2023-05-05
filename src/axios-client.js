import axios from "axios";
import Cookies from "js-cookie";

// normal axios
const axiosClient = axios.create({
	baseURL: `http://localhost:8000/api/`,
});

// axios with token
const axiosToken = axios.create({
	baseURL: `http://localhost:8000/api/`,
});

const token = Cookies.get("access_token")

axiosToken.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${token}`;
	return config;
});
axiosToken.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		throw error;
	}
);

export { axiosClient, axiosToken };
