/** React */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
/** Api */
import { useMyQTQuery } from '@/api/QTQuery.ts'
/** Cookie */
import { getCookie } from '@utils/cookie.ts'
/** Atom */
import { MyPageQTAtom, MyPageQTSearchAtom } from '@/store/MyPageAtom.ts'
/** Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
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

const MyPageQT: React.FC = () => {
	const { page, handleClickPage } = usePage(MyPageQTAtom);

	const { search, handleChangeSearch } = useSearch(MyPageQTSearchAtom, MyPageQTAtom);

	const { data, isLoading, refetch } = useMyQTQuery(getCookie("userId"), page, search);

	useEffect(() => {
		refetch()
	}, [page, search])

	return (
		<PageContainer>
			<MyPageHeader value={2}/>

			<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />

			{
				!isLoading ?
					<>
						{data.qt.map( ( item: any, index: number ) => (
							<Link to={`/qt/read/${item.id}`} key={item.id}>
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

export default MyPageQT;