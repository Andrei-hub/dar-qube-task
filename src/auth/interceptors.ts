import { BASE_URL } from '../constants/env';
import axios from 'axios';

const axiosConfig = {
	baseURL: BASE_URL,
	headers: {
		// Accept: 'application/json,text/plain',
		// 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
		// 'Access-Control-Allow-Origin': 'https://*.com, https://192.168.77.91:8181',
		// 'Access-Control-Allow-Credentials': true,
		// 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		// 'Access-Control-Allow-Headers': 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range',
		// Authorization: `Bearer ${readValue(KC_TOKEN, undefined)}`,
	},
};

export const axiosInstance = axios.create({ ...axiosConfig });
