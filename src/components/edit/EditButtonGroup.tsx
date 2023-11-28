import React from 'react';
import { useNavigate } from 'react-router';
/** Style */
import { Tooltip } from '@mui/material';
import { EditBackButton, EditButton } from '@components/edit/EditButtonGroup.styled.ts';
/** Icon */
import { TbPencilMinus } from "react-icons/tb";
import { RiArrowGoBackFill } from "react-icons/ri";

const EditButtonGroup: React.FC = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1)
	}
	return (
		<React.Fragment>
			<EditBackButton
				ariaLabel="SpeedDial basic example"
				FabProps={{ size: "small" }}
				icon={
					<Tooltip title={"수정"} placement="top">
						<EditButton type={"submit"}>
							<TbPencilMinus size={"20"} />
						</EditButton>
					</Tooltip>
				}
				bottom={66}
				bgc={"#12b886"}
			/>

			<EditBackButton
				ariaLabel="SpeedDial basic example"
				FabProps={{ size: "small" }}
				icon={
					<Tooltip title="뒤로가기" placement="top">
						<EditButton onClick={handleBack}>
							<RiArrowGoBackFill size={"20"} />
						</EditButton>
					</Tooltip>
				}
				bottom={20}
				bgc={"#808080"}
			/>
		</React.Fragment>
	);
};

export default EditButtonGroup;