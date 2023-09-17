/** 게시판 페이지 개수 설정 */
const pageCount = (num: number): number => {
	const pageNum: number = ((Math.floor(num + 1)) / 10) + 1;

	const page: string = pageNum.toFixed(0);

	return Number(page);
};

export default pageCount;