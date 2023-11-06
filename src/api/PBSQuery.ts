import AxiosInstance from '@/api/AxiosInstance';

import { useMutation, useQuery } from '@tanstack/react-query'

/** PBS 게시판 */
const getPBSList = async (page: number, book: string) => {
	try{
		const res = await AxiosInstance.get(`pbs?page=${page}&book=${book}`)
		return res.data
	} catch (err) {
		console.error(err)
	}
}

export const usePBSQuery = (page: number, book: string) => useQuery( {
	queryKey: ["pbs"],
	queryFn: () => getPBSList( page, book )
});

/** 상세 정보 */
const getPBSDetailList = async (id: string) => {
	try{
		const res = await AxiosInstance.get(`pbs/${id}`)
		return res.data
	} catch (err) {
		throw err;
	}
};

export const usePBSDetailQuery = (id: string) => useQuery( {
	queryKey: ["PBSDetail", id],
	queryFn: () => getPBSDetailList( id as string )
});

/** PBS MyPage */
const getMyPagePBS = async (userId: string | null, page: number, book: string) => {
	try {
		const res = await AxiosInstance.get(`mypage/pbs?userId=${userId}&page=${page}&book=${book}`)
		return res.data
	} catch (err){
		throw err;
	}
}

export const useMyPBSQuery = (userId: string | null, page: number, book: string) => useQuery( {
	queryKey:["myPagePbs"],
	queryFn: () => getMyPagePBS( userId, page, book )
})

/** PBS 생성 */
const createPBSList = async (data: any) => {
	try{
		const res = await AxiosInstance.post("pbs", data)
		console.log(res.data)
		return res.data
	} catch (err) {
		throw err
	}
}

export const useCreatePBSMutation = () => useMutation( {
	mutationFn: createPBSList,
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
		const res = await AxiosInstance.delete(`pbs/${id}`);

		return res.data
	} catch (err) {
		throw err
	}
}

export const usePBSDeleteMutation = () => useMutation( { mutationFn: deletePBS });

/** PBS 수정 */
const editPBSList = async (data: any) => {
	try{
		const res = await AxiosInstance.put("pbs", data);

		return res.data
	} catch (err) {
		throw err
	}
}

export const useEditPBSMutation = () => useMutation( { mutationFn: editPBSList });

