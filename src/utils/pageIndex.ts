/** 게시판 index */
const pageIndex = (index: number, page: number | string | undefined): number => {
	return (index + 1) + ((Number(page) - 1) * 10);
};

export default pageIndex;