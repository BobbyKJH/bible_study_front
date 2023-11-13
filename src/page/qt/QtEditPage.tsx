import React from 'react';
import { useParams } from 'react-router';

const QtEditPage: React.FC = () => {
	const { id } = useParams();
	return (
		<div>
			Edit : {id}
		</div>
	);
};

export default QtEditPage;