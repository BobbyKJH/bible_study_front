/** React */
import React, { useState } from 'react';

const usePage = () => {
	const [page, setPage] = useState<number>(1);

	const handleClickPage = (event: React.ChangeEvent<unknown>, value: number): void => {
		setPage(value)
	};

	return { page, setPage, handleClickPage };
};

export default usePage;