import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

/** 주간 PBS */
const getAdminList = async () => {
	try{
		const res = await axios.get("http://localhost:8083/admin")
		return res.data
	} catch (err) {
		console.error(err)
	}
}

export const useAdminQuery = () => useQuery(["admin"], () => getAdminList());

/** 주간 PBS 업데이트 */
const editAdmin = async (data: any) => {
	try{
		const res = await axios.put("http://localhost:8083/admin", data);

		return res.data
	} catch (err) {
		throw err
	}
}

export const useAdminUpdateMutation = () => useMutation(editAdmin, {
	onSuccess: () => {
		alert( "수정 완료" )
	},
	onError: () => {
		alert( "수정 실패" )
	}
});