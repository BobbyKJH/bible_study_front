import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

/** QT 게시판 */
const getQTList  = async () => {
	try {
		const res = await axios.get(`http://localhost:8083/qt/all`);
		return res.data
	} catch(err){
		throw err;
	}
};

export const useQTQuery = () => useQuery(["qt"], () => getQTList());

/** QT 상세 정보 */
const getQtDetailList = async (page:  string) => {
	try{
		const res = await axios.get(`http://localhost:8083/qt/${page}`)
		return res.data
	} catch (err) {
		throw err;
	}
};

export const useQTDetailQuery = (id: string) => useQuery(["QTDetail"], () => getQtDetailList(id as string));

/** QT MyPage */
const getMyPageQt = async (userId: string | null, page: number) => {
	try {
		const res = await axios.get(`http://localhost:8083/mypage/qt?userId=${userId}&page=${page}`)
		return res.data
	} catch (err){
		throw err;
	}
}

export const useMyQTQuery = (userId: string | null, page: number) => useQuery(["myPageQt"], () => getMyPageQt(userId, page));

/** QT 생성 */
const createQTList = async (data: any) => {
	try{
		const res = await axios.post("http://localhost:8083/qt", data)
		console.log(res.data)
		return res.data
	} catch (err) {
		throw err
	}
}

export const useCreateQTMutation = () => useMutation(createQTList, {
	onSuccess: () => {
		alert( "작성 완료" )
	},
	onError: () => {
		alert( "작성 실패" )
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

		return res.data
	} catch (err) {
		throw err
	}
}

export const useEditQTMutation = () => useMutation(editQTList, {
	onSuccess: () => {
		alert( "수정 완료" )
	},
	onError: () => {
		alert( "수정 실패" )
	}
});

