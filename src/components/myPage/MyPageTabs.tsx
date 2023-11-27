import React from 'react';
import { useSearchParams } from 'react-router-dom';
/** Atom */
import { useRecoilState } from 'recoil';
import { MyPageNotice } from '@/atom/MyPageAtom.ts';
/** Style */
import { Tabs } from '@mui/material';
import { MyPageTab } from '@components/myPage/MyPageTabs.styled.ts';

const MyPageTabs: React.FC = () => {
	const [notice, setNotice] = useRecoilState(MyPageNotice);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChangeNotice = (_event: React.SyntheticEvent, newValue: string) => {
		setNotice(newValue)

		searchParams.set("book", "");
		searchParams.set("page", "1");

		setSearchParams(searchParams);
	}

	return (
		<Tabs
			variant={"fullWidth"}
			value={notice}
			onChange={handleChangeNotice}
			textColor="secondary"
			indicatorColor="secondary"
			aria-label="secondary tabs example"
		>
			<MyPageTab value="pbs" label="PBS"/>
			<MyPageTab value="qt" label="QT"/>
			<MyPageTab value="graph" label="그래프"/>
		</Tabs>
	);
};

export default MyPageTabs;