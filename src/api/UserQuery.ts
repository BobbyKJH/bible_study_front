import AxiosInstance from "@/api/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

/** User 조회 */
const getUserId = async (data: { userId: string }) => {
  try {
    const res = await AxiosInstance.post(`user/login`, data);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useUserMutation = () => useMutation({ mutationFn: getUserId });

/** User 생성 */
const createUserId = async (data: { userName: string; userId: string, auth: string }) => {
  try {
    const res = await AxiosInstance.post(`user`, data);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useCreateUserMutation = () =>
  useMutation({ mutationFn: createUserId });
