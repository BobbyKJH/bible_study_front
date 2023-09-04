
const DateFormat = (): string => {
	const fullDate = new Date();

	let year = fullDate.getFullYear();
	let month: number | string = fullDate.getMonth() + 1;
	let day: number | string = fullDate.getDate();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;

	return `${year}-${month}-${day}`;
};

export default DateFormat;