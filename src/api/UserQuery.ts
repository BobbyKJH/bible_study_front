import AxiosInstance from '@/api/AxiosInstance.ts'
import { useMutation } from '@tanstack/react-query'
/** Sha256 */
import { sha256 } from 'js-sha256'

/** User 조회 */
const getUserId = async (data: { userId: string }) =>{
	try{
		const res = await AxiosInstance.post(`user/userId`, data);
		sessionStorage.setItem("userName", res.data.userName);
		sessionStorage.setItem("userAuth", sha256(res.data.userAuth));

		return res.data
	} catch (err) {
		throw err;
	}
}

export const useUserMutation = () => useMutation(getUserId);

/** User 생성 */
const createUserId = async (data: { userName:string, userId: string }) =>{
	try{
		const res = await AxiosInstance.post(`user`, data);

		return res.data
	} catch (err) {
		throw err;
	}
}

export const useCreateUserMutation = () => useMutation(createUserId);
