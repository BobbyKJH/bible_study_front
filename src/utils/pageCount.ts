import Bible from '@type/Bible'

/** 게시판 페이지 개수 설정 */
const pageCount = (notice: Bible.Notice[], search: string): number => {
	const page = notice.filter((item) => item.book.includes(search));
	const pageCount = page.length / 10;

	return Math.ceil(pageCount);
};

export default pageCount;