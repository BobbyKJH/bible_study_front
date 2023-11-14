
const pagination = (value: number): number => {
	const page = value / 10;
	const pageCount = Math.ceil(page);

	if(value === 0) return 1

	return pageCount;
};

export default pagination;