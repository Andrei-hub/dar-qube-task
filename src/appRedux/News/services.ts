import { Post } from 'types';
import { axiosInstance } from 'auth/interceptors';
import { API_NEWS } from 'constants/api';

export const getNews = async (): Promise<Post[]> => {
	try {
		const { data } = await axiosInstance.get(API_NEWS);
		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
};
