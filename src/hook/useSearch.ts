import { useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material'

const useSearch = () => {
	const [search, useSearch] = useState<string>("")

	const handleChangeSearch = useCallback((event: SelectChangeEvent): void => {
		const { value } = event.target;
		useSearch(value);
	}, [search]);

	return { search, handleChangeSearch };
};

export default useSearch;