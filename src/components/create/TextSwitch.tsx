/** React */
import React, { useEffect, useState } from 'react';
/** Type */
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
/** Style */
import { Switch } from '@mui/material';

interface TextSwitchProps {
	setValue: UseFormSetValue<any>;
	watch: UseFormWatch<any>;
}

const TextSwitch: React.FC<TextSwitchProps> = (props) => {
	const { setValue, watch } = props;
	const [check, setCheck] = useState(watch("showData"));

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		if(check === "Y"){
			setCheck("N")
		} else {
			setCheck("Y")
		}
	}

	useEffect(() => {
		setValue("showData", check);
	}, [check, watch])

	return (
		<Switch
			checked={check === "Y"}
			onChange={handleChange}
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
};

export default TextSwitch;