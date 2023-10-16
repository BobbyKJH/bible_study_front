/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Api */
import { useMyPBSQuery } from '@/api/PBSQuery.ts'
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx'
import NoticeSearch from '@components/notice/NoticeSearch.tsx'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
import pageNumber from '@utils/pageNumber.ts'
/** Style */
import { Pagination, SelectChangeEvent } from '@mui/material'
import { FooterContainer } from '@style/common/FooterStyle.ts'

interface MyPBSNotice {
	page: number;
	search: string;
	handleClickPage: (event: React.ChangeEvent<unknown>, value: number) => void;
	handleChangeSearch: (event: SelectChangeEvent) => void
}

const MyPBSNotice: React.FC<MyPBSNotice> = (props) => {
	const { page, search, handleClickPage, handleChangeSearch } = props;
	const { data, isLoading } = useMyPBSQuery(sessionStorage.getItem("userId"), page);

	return (
		<div>
			<NoticeSearch search={search} handleChangeSearch={handleChangeSearch} />

			{
				!isLoading ?
					<>
						{pageNumber(data, search, page).map( ( item: any, index: number ) => (
							<Link to={`/pbs/read/${item.id}`} key={item.id}>
								<NoticeItem
									id={pageIndex( index, page )}
									book={item.book}
									chapter={item.chapter}
									startVerse={item.startVerse}
									endVerse={item.endVerse}
									date={item.date}
								/>
							</Link>
						))}

						<FooterContainer content={"center"}>
							<div>
								<Pagination
									count={pageCount(data, search)}
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
		</div>
	);
};

export default MyPBSNotice;