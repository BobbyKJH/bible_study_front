/** React */
import { useCallback } from 'react';
/** Atom */
import { RecoilState, useRecoilState, useResetRecoilState } from 'recoil'
/** Type */
import { SelectChangeEvent } from '@mui/material'

const useSearch = (initialAtom: RecoilState<string>, resetAtom: RecoilState<number>) => {
	const [search, useSearch] = useRecoilState<string>(initialAtom);
	const reset = useResetRecoilState(resetAtom);

	const handleChangeSearch = useCallback((event: SelectChangeEvent): void => {
		const { value } = event.target;
		useSearch(value);
		reset();
	}, [search]);

	return { search, handleChangeSearch };
};

export default useSearch;