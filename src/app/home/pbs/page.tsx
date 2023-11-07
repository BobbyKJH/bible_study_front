"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

const PbsPage: React.FC = () => {
	const searchParams = useSearchParams();

	const page = searchParams.get("page");
	const book = searchParams.get("book");

	console.log(typeof page)

	return (
		<div>
			{page} & {book}
		</div>
	);
};

export default PbsPage;