import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
/** Libs */
import pagination from '@/libs/pagination.ts';
/** Style */
import { Pagination } from '@mui/material';
import { NoticePaginationContainer } from '@components/notice/NoticePagination.styled.ts';

interface Props {
	count: number;
}

const NoticePagination: React.FC<Props> = ({ count }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const page = Number(searchParams.get("page"));

	const handlePageChange = useCallback((_event: React.ChangeEvent<unknown>, value: number) => {
		searchParams.set("page", String(value));
		setSearchParams(searchParams);
		window.scrollTo( { top:0, left: 0, behavior: "smooth" });
	}, [searchParams])
	
	return (
		<NoticePaginationContainer>
			<Pagination
				size={window.innerWidth < 900 ? "small" : "medium"}
				count={pagination(count)}
				page={Number(page)}
				onChange={handlePageChange}
				showFirstButton showLastButton
			/>
		</NoticePaginationContainer>
	);
};

export default NoticePagination;