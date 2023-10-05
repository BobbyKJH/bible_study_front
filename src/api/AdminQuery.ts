import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'



const getAdminList = async () => {
	try{
		const res = await axios.get("http://localhost:8083/admin")
		return res.data
	} catch (err) {
		throw err;
	}
}

export const useAdminQuery = () => useQuery(["admin"], () => getAdminList());

/** PBS Chart */
const getPBSChart = async (startDate: string, endDate: string) => {
	try {
		const res = await axios.get(`http://localhost:8083/analytics/pbs?startDate=${startDate}&endDate=${endDate}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

/** 주간 PBS Chart */
export const usePBSChartQuery = (startDate: string, endDate: string) => useQuery(["PBSChart"], () => getPBSChart(startDate, endDate));

/** QT Chart */
const getQTChart = async (startDate: string, endDate: string) => {
	try {
		const res = await axios.get(`http://localhost:8083/analytics/qt?startDate=${startDate}&endDate=${endDate}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}

/** 주간 QT Chart */
export const useQTChartQuery = (startDate: string, endDate: string) => useQuery(["QTChart"], () => getQTChart(startDate, endDate));



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