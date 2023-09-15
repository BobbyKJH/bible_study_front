/** Date YYYY-MM-DD */
const DateFormat = (date: Date): string => {
	let year = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let day: number | string = date.getDate();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;

	return `${year}-${month}-${day}`;
};

export default DateFormat;