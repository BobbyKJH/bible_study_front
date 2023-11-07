"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';

const QtPage: React.FC = () => {
	const searchParams = useSearchParams();

	const page = searchParams.get("page");
	const book = searchParams.get("book");

	return (
		<div>

		</div>
	);
};

export default QtPage;