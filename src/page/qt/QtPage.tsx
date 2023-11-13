import React from 'react';
import { useSearchParams } from 'react-router-dom';

const QtPage: React.FC = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const page = searchParams.get("page");
	const book = searchParams.get("book");

	return (
		<div>
			
		</div>
	);
};

export default QtPage;