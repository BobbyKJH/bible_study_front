import React from 'react';
import { useParams } from 'react-router';

const PbsEditPage: React.FC = () => {
	const { id } = useParams();

	return (
		<div>
			edit: {id}
		</div>
	);
};

export default PbsEditPage;