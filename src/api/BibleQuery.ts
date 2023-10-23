import AxiosInstance from '@/api/AxiosInstance.ts'
import { useQuery } from '@tanstack/react-query';

export const findByBible = async (book: string, chapter: string) => {
	try {
		const res = await AxiosInstance.get(`bible?book=${book}&chapter=${chapter}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

export const useCreatePBSQuery = (book: string, chapter: string) => useQuery(["createBible"], () => findByBible(book, chapter));
