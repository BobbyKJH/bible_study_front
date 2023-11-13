import React from 'react';
import { useSearchParams } from 'react-router-dom';

const PbsPage: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const page = searchParams.get("page");
	const book = searchParams.get("book");

	return (
		<div>
			page: {page} , book : {book}
		</div>
	);
};

export default PbsPage;