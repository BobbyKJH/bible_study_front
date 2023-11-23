import React from 'react';
/** Style */
import { DetailTitle } from '@components/detail/DetailBook.styled.ts';

interface Props {
	book: string;
}

const DetailBook: React.FC<Props> = ({ book }) => {
	return (
		<DetailTitle>
			{book}
		</DetailTitle>
	);
};

export default DetailBook;