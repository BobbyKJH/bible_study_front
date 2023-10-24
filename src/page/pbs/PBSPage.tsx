/** React */
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';
/** Api */
import { usePBSQuery } from '@/api/PBSQuery.ts'
/** Atom */
import { PBSPageAtom, PBSSearchAtom } from '@/store/NoticeAtom.ts'
/** Custom Hook */
import usePage from '@/hook/usePage.ts'
import useSearch from '@/hook/useSearch.ts'
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx'
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import NoticePage from '@utils/notice/NoticePage.ts'
/** Style */
import { Button, Pagination } from '@mui/material'
import { PageContainer } from '@style/common/PageStyle.ts'
import { FooterContainer } from '@style/common/FooterStyle.ts'
import { NoticePaper, NoticeTitle, NoticeCreateBtn } from '@style/notice/NoticeStyle.ts'


const PBSPage: React.FC = () => {
	/** 검색 */
	const { search, handleChangeSearch } = useSearch(PBSSearchAtom, PBSPageAtom);
	/** Page */
	const { page, handleClickPage  } = usePage(PBSPageAtom);
	/** PBS 게시판 */
	const { data, isLoading, refetch } = usePBSQuery(page, search);

	useEffect(() => {
		refetch();
	}, [page, search]);

	return (
		<PageContainer>
			<NoticeTitle>
				<p>PBS 게시판</p>

				<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />
			</NoticeTitle>

			{!isLoading ?
				<NoticePaper elevation={0}>
					<div>
						{data.pbs.map((item: any, index: number) => (
							<Link to={`/pbs/read/${item.id}`} key={item.id}>
									<NoticeItem
										id={pageIndex(index, page)}
										book={item.book}
										chapter={item.chapter}
										startVerse={item.startVerse}
										endVerse={item.endVerse}
									/>
							</Link>
						))}
					</div>

					<FooterContainer content={"center"}>
						<div>
							<Pagination
								count={NoticePage(data.length)}
								page={page}
								onChange={handleClickPage}
								showFirstButton
								showLastButton
								sx={{ display:"flex",justifyContent:"center", p: "10px 0px" }}
							/>

							<NoticeCreateBtn to={"/pbs/create"}>
								<Button variant="contained" color="success">
									글쓰기
								</Button>
							</NoticeCreateBtn>
						</div>
					</FooterContainer>
				</NoticePaper>
				:
				null
			}
		</PageContainer>
	);
};

export default PBSPage;