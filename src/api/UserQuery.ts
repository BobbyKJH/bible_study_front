import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const getUserId = async (data: { userId: string }) =>{
	try{
		const res = await axios.post(`http://localhost:8083/user/userId`, data);
		sessionStorage.setItem("userId", res.data.userId)
		return res.data
	} catch (err) {
		throw err;
	}
}

export const useUserMutation = () => useMutation(getUserId);

