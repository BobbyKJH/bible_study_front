import AxiosInstance from "@/api/AxiosInstance";

import { useMutation, useQuery } from "@tanstack/react-query";

const getAdminList = async () => {
  try {
    const res = await AxiosInstance.get("admin");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useAdminQuery = () =>
  useQuery({
    queryKey: ["admin"],
    queryFn: () => getAdminList(),
  });

/** PBS Chart */
const getPBSChart = async (startDate: string, endDate: string) => {
  try {
    const res = await AxiosInstance.get(
      `analytics/pbs?startDate=${startDate}&endDate=${endDate}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

/** 주간 PBS Chart */
export const usePBSChartQuery = (startDate: string, endDate: string) =>
  useQuery({
    queryKey: ["PBSChart"],
    queryFn: () => getPBSChart(startDate, endDate),
  });

/** QT Chart */
const getQTChart = async (startDate: string, endDate: string) => {
  try {
    const res = await AxiosInstance.get(
      `analytics/qt?startDate=${startDate}&endDate=${endDate}`
    );
    return res.data;
  } catch (err) {
    throw err;
  }
};

/** 주간 QT Chart */
export const useQTChartQuery = (startDate: string, endDate: string) =>
  useQuery({
    queryKey: ["QTChart"],
    queryFn: () => getQTChart(startDate, endDate),
  });

/** 주간 PBS 업데이트 */
const editAdmin = async (data: any) => {
  try {
    const res = await AxiosInstance.put("admin", data);

    return res.data;
  } catch (err) {
    throw err;
  }
};

export const useAdminUpdateMutation = () =>
  useMutation({ mutationFn: editAdmin });
