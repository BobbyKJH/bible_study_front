/** React */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
/** Custom Hook */
import usePage from '@/hook/usePage.ts'
/** Utils */
import pageIndex from '@utils/pageIndex.ts'
import pageCount from '@utils/pageCount.ts'
/** Api */
import { usePBSQuery } from '@/api/PBSQuery.ts'
/** Type */
import Bible from '@type/Bible'
/** Style */
import { NoticeContainer, PageContainer } from '@style/common/PageStyle.ts'
import { Container, Pagination } from '@mui/material'


const PBSPage: React.FC = () => {
	/** Page */
	const { page, handleClickPage  } = usePage();
	/** PBS 게시판 */
	const { data, isLoading, refetch } = usePBSQuery(page);

	useEffect(() => {
		refetch();
	}, [page])

	return (
		<PageContainer>
			<Container maxWidth="lg" sx={{ border: "1px solid black", marginBottom: "20px", height:"500px" ,display:"flex", flexDirection:"column",
			justifyContent:"space-between"
			}}>

				<div>
					{!isLoading ?
						<NoticeContainer>
							<div>
								{data.pbs.map((item: Bible.Notice, index: number) => (
									<Link to={`/pbs/read/${item.id}`} key={item.id}>
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


					<Link to={"/pbs/create"}>글쓰기</Link>
			</Container>
		</PageContainer>
	);
};

export default PBSPage;