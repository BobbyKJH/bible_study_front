/** React */
import React, { useCallback, useState } from 'react';

const usePage = () => {
	const [page, setPage] = useState<number>(1);

	const handleClickPage = useCallback((event: React.ChangeEvent<unknown>, value: number): void => {
		setPage(value)
	}, [page]);

	return { page, setPage, handleClickPage };
};

export default usePage;