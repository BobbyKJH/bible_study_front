import React from 'react';
import { useParams } from 'react-router';
import { usePBSDetailQuery } from '@/api/PBSQuery.ts';

const PbsDetailPage: React.FC = () => {
	const { id } = useParams();
	const { data, isLoading } = usePBSDetailQuery(id as string);

	if(isLoading) return <p>hello</p>

	return (
		<div>
			{data.book}
		</div>
	);
};

export default PbsDetailPage;