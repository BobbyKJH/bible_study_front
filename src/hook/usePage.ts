/** React */
import React, { useCallback } from 'react';
/** Atom */
import { RecoilState, useRecoilState, useResetRecoilState } from 'recoil';

const usePage = (initailAtom: RecoilState<number>) => {
	const [page, setPage] = useRecoilState(initailAtom);
	const resetPage = useResetRecoilState(initailAtom);
	
	const handleClickPage = useCallback((event: React.ChangeEvent<unknown>, value: number): void => {
		window.scrollTo(0, 0);
		setPage(value)
	}, [page]);

	return { page, setPage, handleClickPage, resetPage };
};

export default usePage;