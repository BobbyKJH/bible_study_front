import React, { useEffect, useState } from 'react';
/** Style */
import Switch from '@mui/material/Switch';
import { UseFormSetValue } from 'react-hook-form';

interface Props {
	setValue: UseFormSetValue<any>;
	value: string;
}

const EditShowData: React.FC<Props> = ({ setValue, value }) => {
	const [checked, setChecked] = useState(value === "Y");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	useEffect(() => {
		setValue("showData", checked ? "Y" : "N");
	}, [checked])

	return (
		<Switch
			checked={checked}
			onChange={handleChange}
		/>
	);
}

export default EditShowData