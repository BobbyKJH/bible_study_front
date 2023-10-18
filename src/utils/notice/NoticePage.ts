const NoticePage = (num: number): number  => {
	const page = Math.ceil(num / 10);

	return page;
};

export default NoticePage;