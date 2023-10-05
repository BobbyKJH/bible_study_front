import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

/** QT 게시판 */
const getQTList  = async (page: number) => {
	try {
		const res = await axios.get(`http://localhost:8083/qt?page=${page}`);
		return res.data
	} catch(err){
		throw err;
	}
};

export const useQTQuery = (page: number) => useQuery(["qt"], () => getQTList(page));

/** QT 상세 정보 */
const getQtDetailList = async (page:  string) => {
	try{
		const res = await axios.get(`http://localhost:8083/qt/${page}`)
		return res.data
	} catch (err) {
		throw err;
	}
};

export const useQtDetailQuery = (id: string) => useQuery(["QTDetail"], () => getQtDetailList(id as string));

/** QT MyPage */
const getMyPageQt = async (userId: string | null, page: number) => {
	try {
		const res = await axios.get(`http://localhost:8083/mypage/qt?userId=${userId}&page=${page}`)
		return res.data
	} catch (err){
		throw err;
	}
}

export const useMyQtQuery = (userId: string | null, page: number) => useQuery(["myPageQt"], () => getMyPageQt(userId, page));

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