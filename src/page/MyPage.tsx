/** React */
import React, { useEffect, useState } from 'react';
/** Hook */
import usePage from '@/hook/usePage.ts';
import useSearch from '@/hook/useSearch.ts';
/** Component */
import MyQTNotice from '@components/myPage/MyQTNotice.tsx';
import MyPBSNotice from '@components/myPage/MyPBSNotice.tsx';
/** Style */
import { Tab } from '@mui/material';
import { PageContainer } from '@style/common/PageStyle.ts';
import { MyPageFooterContainer } from '@style/common/FooterStyle.ts';


const MyPage: React.FC = () => {
	const [value, setValue] = useState(0);

	const { page: PBSPage, setPage: setPBSPage, handleClickPage: handleClickPBS } = usePage();
	const { search: PBSSearch, handleChangeSearch: handleSearchPBS } = useSearch();

	useEffect(() => {
		setPBSPage(1);
	}, [PBSSearch])

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<PageContainer>
			<MyPageFooterContainer value={value} onChange={handleChange} centered>
				<Tab label="그래프" sx={{ height: "100%", fontWeight: 900, width:"33.3%" }} />
				<Tab label="PBS"  sx={{ height: "100%", fontWeight: 900, width:"33.3%" }} />
				<Tab label="QT"   sx={{ height: "100%", fontWeight: 900, width:"33.3%" }} />
			</MyPageFooterContainer>

			{
				value === 1
				&&
				<MyPBSNotice
					page={PBSPage}
          search={PBSSearch}
					handleClickPage={handleClickPBS}
          handleChangeSearch={handleSearchPBS}
				/>
			}

			{value === 2 && <MyQTNotice/>}

		</PageContainer>
	);
};

export default MyPage;