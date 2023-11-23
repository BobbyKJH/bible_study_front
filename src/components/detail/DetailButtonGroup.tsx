import React from 'react';
import { useNavigate } from 'react-router';
/** Cookie */
import { getCookie } from '@/libs/cookie.ts';
/** Style */
import { Button } from '@mui/material';
import {
	DetailButtonGroupContainer,
	DetailDeleteButton,
	DetailEditButton
} from '@components/detail/DetailButtonGroup.styled.ts';

interface Props {
	userId: string;
	id: number;
	path: string;
	handleDelete: () => void;
}

const DetailButtonGroup: React.FC<Props> = ({ userId, id, path, handleDelete }) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	}

	const handleEditButton = () => {
		navigate(`/home/${path}/edit/${id}`);
	}

	return (
		<DetailButtonGroupContainer>
			<Button variant="contained" onClick={goBack}>뒤로가기</Button>

			{
				userId === getCookie("userId") &&
					<div>
						<DetailEditButton variant="contained" color="success" onClick={handleEditButton}>
							수정
						</DetailEditButton>
						<DetailDeleteButton onClick={handleDelete}  variant="contained" color="error">
							삭제
						</DetailDeleteButton>
					</div>
			}
		</DetailButtonGroupContainer>
	);
};

export default DetailButtonGroup;