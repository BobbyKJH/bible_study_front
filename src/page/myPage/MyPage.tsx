import { MyPageNotice } from '@/atom/MyPageAtom.ts';
import MyPageGraph from '@components/myPage/MyPageGraph.tsx';
import MyPageTabs from '@components/myPage/MyPageTabs.tsx';
import React from 'react';
import MyQtNotice from '@components/myPage/MyQtNotice.tsx';
import MyPbsNotice from '@components/myPage/MyPbsNotice.tsx';
import { useRecoilValue } from 'recoil';

const MyPage: React.FC = () => {
	const notice = useRecoilValue(MyPageNotice);


	return (
		<div>
			<MyPageTabs/>

			{notice === "pbs" && <MyPbsNotice/>}

			{notice === "qt" && <MyQtNotice/>}

			{notice === "graph" && <MyPageGraph/>}
		</div>
	);
};

export default MyPage;