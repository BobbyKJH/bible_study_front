import React from 'react';
/** Style */
import { DetailContentMultiTextField } from '@components/detail/DetailContent.styled.ts';

interface Props {
	content: string;
}

const DetailContent: React.FC<Props> = ({ content }) => {
	return (
		<DetailContentMultiTextField
			multiline
			fullWidth
			minRows={10}
			disabled={true}
			value={content}
		/>
	);
};

export default DetailContent;