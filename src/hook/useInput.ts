import React, { useCallback, useState } from 'react';

const useInput = <T>(initialValue: T) => {
	const [input, setInput] = useState(initialValue);

	const handleChangeInput = useCallback(
		( event: React.ChangeEvent<HTMLInputElement> ): void => {
			const { value, name } = event.currentTarget;
			setInput({
				...input,
				 [name]: value
			})
	},[input]);
	
	return { input, setInput, handleChangeInput };
};

export default useInput;