import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

/** User 조회 */
const getUserId = async (data: { userId: string }) =>{
	try{
		const res = await axios.post(`http://localhost:8083/user/userId`, data);
		sessionStorage.setItem("userId", res.data.userId);
		sessionStorage.setItem("userName", res.data.userName);
		sessionStorage.setItem("userAuth", res.data.userAuth);
		
		return res.data
	} catch (err) {
		throw err;
	}
}

export const useUserMutation = () => useMutation(getUserId);

/** User 생성 */
const createUserId = async (data: { userName:string, userId: string }) =>{
	try{
		const res = await axios.post(`http://localhost:8083/user`, data);

		return res.data
	} catch (err) {
		throw err;
	}
}

export const useCreateUserMutation = () => useMutation(createUserId);
