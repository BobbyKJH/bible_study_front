/** React */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
/** Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
/** Atom */
import { MyPagePBSAtom, MyPagePBSSearchAtom } from '@/store/MyPageAtom.ts'
/** Api */
import { useMyPBSQuery } from '@/api/PBSQuery.ts'
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx'
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
import MyPageHeader from '@components/myPage/MyPageHeader.tsx'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import NoticePage from '@utils/notice/NoticePage.ts'
/** Style */
import { Pagination } from '@mui/material'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'


const MyPagePBS: React.FC = () => {
	const { search, handleChangeSearch } = useSearch(MyPagePBSSearchAtom, MyPagePBSAtom);
	const { page, handleClickPage } = usePage(MyPagePBSAtom);

	const { data, isLoading, refetch } = useMyPBSQuery(sessionStorage.getItem("userId"), page, search);

	useEffect(() => {
		refetch();
	}, [page, search])

	return (
		<PageContainer>
			<MyPageHeader value={1}/>

			<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />
			
			{
				!isLoading ?
					<>
						{data.pbs.map( ( item: any, index: number ) => (
							<Link to={`/pbs/read/${item.id}`} key={item.id}>
								<NoticeItem
									id={pageIndex( index, page )}
									book={item.book}
									chapter={item.chapter}
									startVerse={item.startVerse}
									endVerse={item.endVerse}
								/>
							</Link>
						))}

						<FooterContainer content={"center"}>
							<div>
								<Pagination
									count={NoticePage(data.length)}
									page={page}
									onChange={handleClickPage}
									showFirstButton
									showLastButton
									sx={{ display:"flex",justifyContent:"center" }}
								/>
							</div>
						</FooterContainer>
					</>
					:
					null
			}
		</PageContainer>
	);
};

export default MyPagePBS;