import { TextField } from '@mui/material';
import React from 'react';
import styles from "@/components/create/CreateContent.module.css"
import { UseFormRegister } from 'react-hook-form';

interface Props {
	value: string;
	register: UseFormRegister<any>;
}

const CreateContent: React.FC<Props> = ({ value, register }) => {
	return (
		<TextField
			className={styles.input_content}
			multiline
			variant="standard"
			inputProps={{
				style: {
					padding: "15px 25px"
				}
			}}
			{...register(value, { required: true })}
		/>
	);
};

export default CreateContent;