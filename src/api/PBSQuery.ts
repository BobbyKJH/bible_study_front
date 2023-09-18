import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'

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
const getPBSDetailList = async (page:  string) => {
	try{
		const res = await axios.get(`http://localhost:8083/pbs/${page}`)
		return res.data
	} catch (err) {
		throw err;
	}
}

export const useDetailQuery = (id: string) => useQuery(["PBSDetail"], () => getPBSDetailList(id as string))

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

export const useCreateMutation = () => useMutation(createPBSList, {
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
		const res = await axios.delete(`http://localhost:8083/pbs/${id}`)
		console.log(res.data)
		return res.data
	} catch (err) {
		throw err
	}
}

export const useDeleteMutation = () => useMutation(deletePBS);

