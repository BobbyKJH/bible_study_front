/** React */
import React from 'react';
import { Link } from 'react-router-dom'
/** Query */
import { useQTQuery } from '@/api/QTQuery.ts'
/** Hook */
import usePage from '@/hook/usePage.ts'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
/** Type */
import Bible from '@type/Bible'
/** Style */
import { Pagination } from '@mui/material'
import { NoticeContainer, PageContainer } from '@style/common/PageStyle.ts'
/** Icon */
import { IoCreateOutline } from "react-icons/io5";

const QTPage: React.FC = () => {
	const { page, handleClickPage } = usePage();
	const { data, isLoading } = useQTQuery(page);

	console.log(!isLoading && data)

	return (
		<PageContainer>
			<IoCreateOutline/>
			<div>
				{!isLoading ?
					<NoticeContainer>
						<div>
							{data.qt.map((item: Bible.Notice, index: number) => (
								<Link to={`/qt/read/${item.id}`} key={item.id}>
									<div>
										<span>{pageIndex(index, page)}</span>
										<span>{item.book}</span>
										<span>{item.chapter}장</span>
										<span>{item.startVerse}절</span>
										<span>{item.endVerse}절</span>
										<span>{item.id}</span>
									</div>
								</Link>
							))}
						</div>

						<Pagination
							count={pageCount(data.length)}
							page={page}
							onChange={handleClickPage}
							showFirstButton
							showLastButton
							sx={{ display:"flex",justifyContent:"center" }}
						/>
					</NoticeContainer>
					:
					null
				}
			</div>
		</PageContainer>
	);
};

export default QTPage;