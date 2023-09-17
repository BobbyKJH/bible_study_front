/** 게시판 index */
const pageIndex = (index: number, page: number): number => {
	return (index + 1) + ((page - 1) * 10);
};

export default pageIndex;