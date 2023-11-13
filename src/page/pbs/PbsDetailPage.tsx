import React from 'react';
import { useParams } from 'react-router';

const PbsDetailPage: React.FC = () => {
	const { id } = useParams();
	return (
		<div>
			detail {id}
		</div>
	);
};

export default PbsDetailPage;