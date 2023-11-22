import React, { useEffect, useState } from 'react';
/** Style */
import Switch from '@mui/material/Switch';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface Props { 
	setValue: UseFormSetValue<any>;
	watch: UseFormWatch<any>
}

const CreateShowData: React.FC<Props> = ({ setValue, watch }) => {
	const [checked, setChecked] = useState(watch("showData") === "Y");

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

export default CreateShowData