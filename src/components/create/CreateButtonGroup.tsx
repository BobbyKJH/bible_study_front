import React from 'react';
/** Style */
import { CreateButtonGroupContainer } from '@components/create/CreateButtonGroup.styled.ts';

interface Props {
	children: React.ReactNode
}

const CreateButtonGroup: React.FC<Props> = ({ children }) => {

	return (
		<CreateButtonGroupContainer>
			{children}
		</CreateButtonGroupContainer>
	);
};

export default CreateButtonGroup;