import React from 'react';
/** Style */
import { Tooltip } from '@mui/material';
import { PbsTempButton, PbsCreateButton } from '@components/create/CreateButtonGroup.styled.ts';
/** Icon */
import { MdSaveAs } from "react-icons/md";
import { TbPencilCheck } from "react-icons/tb";


interface Props {
	handleTempStorage: (event: React.MouseEvent) => void;
}

const CreateButtonGroup: React.FC<Props> = ({ handleTempStorage }) => {
	return (
		<React.Fragment>
			<PbsTempButton
				ariaLabel="SpeedDial basic example"
				FabProps={{ size: "small" }}
				icon={
				<Tooltip title={"생성"} placement="top">
					<PbsCreateButton type={"submit"}>
						<TbPencilCheck size={"20"} />
					</PbsCreateButton>
				</Tooltip>
			}
				bottom={66}
				bgc={"#12b886"}
			/>

			<PbsTempButton
				ariaLabel="SpeedDial basic example"
				FabProps={{ size: "small" }}
				onClick={handleTempStorage}
				icon={
				<Tooltip title="임시저장" placement="top">
					<PbsCreateButton>
						<MdSaveAs size={"20"} />
					</PbsCreateButton>
				</Tooltip>
			}
				bottom={20}
				bgc={"#808080"}
			/>
		</React.Fragment>
	);
};

export default CreateButtonGroup;