/** 게시판 페이지 개수 설정 */
const pageCount = (num: number): number => {
	const pageMath = Math.floor(num / 10);
	const pageNum: number = num % 10 === 0 ? pageMath : pageMath + 1;

	const page: string = pageNum.toFixed(0);

	return Number(page);
};

export default pageCount;