import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

/** QT 게시판 */
const getQTList = async (page: number, book: string) => {
	try {
		const res = await axios.get(`http://localhost:8083/qt?page=${page}&book=${book}`);
		return res.data;
	} catch(err){
		throw err;
	}
};

export const useQTQuery = (page: number, book: string) => useQuery(["qt"], () => getQTList(page, book));

/** QT 상세 정보 */
const getQtDetailList = async (page:  string) => {
	try{
		const res = await axios.get(`http://localhost:8083/qt/${page}`)
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const useQTDetailQuery = (id: string) => useQuery(["QTDetail"], () => getQtDetailList(id as string));

/** QT MyPage */
const getMyPageQt = async (userId: string | null, page: number, book: string) => {
	try {
		const res = await axios.get(`http://localhost:8083/mypage/qt?userId=${userId}&page=${page}&book=${book}`)
		return res.data;
	} catch (err){
		throw err;
	}
}

export const useMyQTQuery = (userId: string | null, page: number, book: string) => useQuery(["myPageQt"], () => getMyPageQt(userId, page, book));

/** QT 생성 */
const createQTList = async (data: any) => {
	try{
		const res = await axios.post("http://localhost:8083/qt", data)
		return res.data;
	} catch (err) {
		throw err
	}
}

export const useCreateQTMutation = () => useMutation(createQTList, {
	onSuccess: () => {
		alert( "작성 완료" );
	},
	onError: () => {
		alert( "작성 실패" );
	}
});

/** QT 삭제 */
const deleteQT = async (id: number) => {
	try {
		const res = await axios.delete(`http://localhost:8083/qt/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

export const useQTDeleteMutation = () => useMutation(deleteQT);

/** QT 수정 */
const editQTList = async (data: any) => {
	try{
		const res = await axios.put("http://localhost:8083/qt", data);

		return res.data;
	} catch (err) {
		throw err
	}
}

export const useEditQTMutation = () => useMutation(editQTList, {
	onSuccess: () => {
		alert( "수정 완료" );
	},
	onError: () => {
		alert( "수정 실패" );
	}
});

