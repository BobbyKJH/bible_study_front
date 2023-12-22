const createDate = (date: string) => {
  const year = date.slice(0, 4);

  const month = date.slice(5, 7);

  const day = Number(date.slice(8, 10)) > 10 ? date.slice(8, 10) : date.slice(9, 10);

  return `${year}년 ${month}월 ${day}일`
};

export default createDate;