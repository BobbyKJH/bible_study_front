/** React */
import React, { useEffect } from 'react';
/** Hook */
import usePage from '@/hook/usePage.ts'
/** Query */
import { useMyQtQuery } from '@/api/QTQuery.ts'
import { useMyPbsQuery } from '@/api/PBSQuery.ts'
/** Component */
import MyPageNotice from '@components/myPage/MyPageNotice.tsx'
import NoticeSkeleton from '@components/notice/NoticeSkeleton.tsx'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'

const MyPage: React.FC = () => {
	/** PBS Notice */
	const { page: pbsPage, handleClickPage: handleClickPBS } = usePage();
	const { data: dataPBS, isLoading: isLoadingPBS, refetch: refetchPBS } = useMyPbsQuery(sessionStorage.getItem("userId"), pbsPage);
	/** QT Notice */
	const { page: qtPage, handleClickPage: handleClickQT } = usePage();
	const { data: dataQT, isLoading: isLoadingQT, refetch: refetchQT } = useMyQtQuery(sessionStorage.getItem("userId"), qtPage);

	useEffect(() => {
		refetchPBS()
	}, [pbsPage])

	useEffect(() => {
		refetchQT()
	}, [qtPage])

	return (
		<PageContainer>
			<div style={{ display: "flex", justifyContent: "space-between"}}>
				{!isLoadingPBS ?
					<MyPageNotice data={dataPBS.myPbs} length={dataPBS.length} page={pbsPage} link={"pbs"} handleClickPage={handleClickPBS}/>
					:
					<NoticeSkeleton/>
				}

				{!isLoadingQT ?
					<MyPageNotice data={dataQT.myQt} length={dataQT.length} page={qtPage} link={"qt"} handleClickPage={handleClickQT}/>
					:
					null
				}
			</div>
		</PageContainer>
	);
};

export default MyPage;