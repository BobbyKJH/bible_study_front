import React from 'react';
/** Hook */
import useSnack from '@/hook/useSnack.ts';
/** Style */
import { SnackAlert, SnackContainer } from '@components/snack/Snack.styled.ts';

const Snack: React.FC = () => {
	const { snack , handleCloseSnack } = useSnack();
	const { open, vertical, horizontal } = snack;

	return (
		<SnackContainer
			anchorOrigin={{ vertical, horizontal }}
			open={open}
			onClose={handleCloseSnack}
			autoHideDuration={1500}
		>
			<SnackAlert onClose={handleCloseSnack} severity={snack.severity}>
				{snack.message}
			</SnackAlert>
		</SnackContainer>
	);
}

export default React.memo(Snack);