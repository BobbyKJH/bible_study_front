/** React */
import React from 'react';
/** Hook */
/** Component */
import MyPageHeader from '@components/myPage/MyPageHeader.tsx'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts';


const MyPage: React.FC = () => {

	return (
		<PageContainer>
			<MyPageHeader value={0}/>

		</PageContainer>
	);
};

export default MyPage;