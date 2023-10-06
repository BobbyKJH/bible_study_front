import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

/** PBS 게시판 */
const getPBSList = async (page: number) => {
	try{
		const res = await axios.get(`http://localhost:8083/pbs?page=${page}`)
		return res.data
	} catch (err) {
		console.error(err)
	}
}

export const usePBSQuery = (page: number) => useQuery(["pbs"], () => getPBSList(page));

/** 상세 정보 */
const getPBSDetailList = async (id: string) => {
	try{
		const res = await axios.get(`http://localhost:8083/pbs/${id}`)
		return res.data
	} catch (err) {
		throw err;
	}
};

export const usePBSDetailQuery = (id: string) => useQuery( ["PBSDetail", id], () => getPBSDetailList( id as string ));

/** PBS MyPage */
const getMyPagePBS = async (userId: string | null, page: number) => {
	try {
		const res = await axios.get(`http://localhost:8083/mypage/pbs?userId=${userId}&page=${page}`)
		return res.data
	} catch (err){
		throw err;
	}
}

export const useMyPBSQuery = (userId: string | null, page: number) => useQuery(["myPagePbs"], () => getMyPagePBS(userId, page))

/** PBS 생성 */
const createPBSList = async (data: any) => {
	try{
		const res = await axios.post("http://localhost:8083/pbs", data)
		console.log(res.data)
		return res.data
	} catch (err) {
		throw err
	}
}

export const useCreatePBSMutation = () => useMutation(createPBSList, {
	onSuccess: () => {
		alert( "작성 완료" )
	},
	onError: () => {
		alert( "작성 실패" )
	}
});

/** PBS 삭제 */
const deletePBS = async (id: number) => {
	try{
		const res = await axios.delete(`http://localhost:8083/pbs/${id}`);

		return res.data
	} catch (err) {
		throw err
	}
}

export const usePBSDeleteMutation = () => useMutation(deletePBS);

/** PBS 수정 */
const editPBSList = async (data: any) => {
	try{
		const res = await axios.put("http://localhost:8083/pbs", data);

		return res.data
	} catch (err) {
		throw err
	}
}

export const useEditPBSMutation = () => useMutation(editPBSList, {
	onSuccess: () => {
		alert( "수정 완료" )
	},
	onError: () => {
		alert( "수정 실패" )
	}
});

