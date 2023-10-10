import Bible from '@type/Bible'

const pageNumber = (data: Bible.Notice[],input: string, num: number) => {
	const startPage = (num - 1) * 10;
	const endPage =  startPage + 10;

	return data.filter((bible) => bible.book.includes(input)).slice(startPage, endPage);
};

export default pageNumber;