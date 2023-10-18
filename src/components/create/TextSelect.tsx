/** React */
import React from 'react';
/** Type */
import { UseFormRegister, UseFormWatch } from 'react-hook-form'
/** Utils */
import { newTestament, oldTestament } from '@utils/arr/BibleBooks.ts'
/** Style */
import { ListSubheader, MenuItem, Select } from '@mui/material';

interface TextSelectProps {
	register: UseFormRegister<any>;
	watch: UseFormWatch<any>
	name: string;
}

const TextSelect: React.FC<TextSelectProps> = (props) => {
	const { register, name, watch } = props;

	return (
		<div>
			<Select
				defaultValue={watch(name) || ""}
				displayEmpty
				sx={{width: "150px"}}
				{...register(name, { required: true })}
			>
				<MenuItem value="">
					<em>선택해주세요.</em>
				</MenuItem>
				<ListSubheader>구약</ListSubheader>
				{oldTestament.map((book) => (
					<MenuItem value={book.book} key={book.id}>
					<em>{book.book}</em>
					</MenuItem>
				))}
				<ListSubheader>신약</ListSubheader>
				{newTestament.map((book) => (
					<MenuItem value={book.book} key={book.id}>
						<em>{book.book}</em>
					</MenuItem>
				))}
			</Select>

		</div>
	);
};

export default TextSelect;