import AxiosInstance from "@/api/AxiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";

/** QT 게시판 */
const getQTList = async (page: number, book: string) => {
  try {
    const res = await AxiosInstance.get(`qt?page=${page}&book=${book}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useQTQuery = (page: number, book: string) =>
  useQuery({
    queryKey: ["qt"],
    queryFn: () => getQTList(page, book),
  });

/** QT 상세 정보 */
const getQtDetailList = async (page: string) => {
  try {
    const res = await AxiosInstance.get(`qt/${page}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useQTDetailQuery = (id: string) =>
  useQuery({
    queryKey: ["QTDetail"],
    queryFn: () => getQtDetailList(id as string),
  });

/** QT MyPage */
const getMyPageQt = async (
  uuid: string | null,
  page: number,
  book: string
) => {
  try {
    const res = await AxiosInstance.get(
      `qt/mypage?uuid=${uuid}&page=${page}&book=${book}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useMyQTQuery = (
  uuid: string | null,
  page: number,
  book: string
) =>
  useQuery({
    queryKey: ["myPageQt"],
    queryFn: () => getMyPageQt(uuid, page, book),
  });

/** QT 생성 */
const createQTList = async (data: any) => {
  try {
    const res = await AxiosInstance.post("qt", data);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useCreateQTMutation = () =>
  useMutation({ mutationFn: createQTList });

/** QT 삭제 */
const deleteQT = async (id: number) => {
  try {
    const res = await AxiosInstance.delete(`qt/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useQTDeleteMutation = () => useMutation({ mutationFn: deleteQT });

/** QT 수정 */
const editQTList = async (data: any) => {
  try {
    const res = await AxiosInstance.put("qt", data);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useEditQTMutation = () => useMutation({ mutationFn: editQTList });

/** Qt View Best */
export const viewQTList = async (book: string) => {
  try {
    const res = await AxiosInstance.get(`qt/view?book=${book}`);

    return res.data
  } catch (err) {
    throw err;
  }
}

export const useViewQTQuery = (book: string) => useQuery({
  queryKey: ["bestViewQt", book],
  queryFn: () => viewQTList(book)
});
