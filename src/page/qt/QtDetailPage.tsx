import React from 'react';
import { useParams } from 'react-router';

const QtDetailPage: React.FC = () => {
	const { id } =useParams();
	return (
		<div>
			Detail : {id}
		</div>
	);
};

export default QtDetailPage;