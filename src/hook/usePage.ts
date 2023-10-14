/** React */
import React, { useCallback, useState } from 'react';

const usePage = () => {
	const [page, setPage] = useState<number>(1);

	const handleClickPage = useCallback((event: React.ChangeEvent<unknown>, value: number): void => {
		window.scrollTo(0, 0);
		setPage(value)
	}, [page]);

	return { page, setPage, handleClickPage };
};

export default usePage;