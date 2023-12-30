import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** Api */
import { useMyPBSQuery } from '@/api/PBSQuery.ts';
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx';
import NoticeBible from '@components/notice/NoticeBible.tsx';
import NoticePagination from '@components/notice/NoticePagination.tsx';
import NoticeLoadingItem from '@components/notice/NoticeLoadingItem.tsx';
import NoticeCreateButton from '@components/notice/NoticeCreateButton.tsx';
/** Type */
import Bible from '@type/Bible';

const MyPbsNotice: React.FC = () => {
	const [searchParams] = useSearchParams();
	/** Http Query */
	const page = searchParams.get("page");
	const book = searchParams.get("book");

	const { data, isLoading, refetch } = useMyPBSQuery(sessionStorage.getItem("uuid"), Number(page), book as string)

	useEffect(() => {
		refetch();
	}, [searchParams])

	if(isLoading) return <NoticeLoadingItem/>

	return (
		<div>
			<NoticeBible/>

			<Grid container>
			{
				data.pbs.map((notice: Bible.Notice) => (
					<Grid item xs={6} key={notice.id}>
						<Link to={`/home/pbs/${notice.id}`}>
							<NoticeItem
								book={notice.book}
								startVerse={notice.startVerse}
								endVerse={notice.endVerse}
								chapter={notice.chapter}
								view={notice.view}
							/>
						</Link>
					</Grid>
				))
			}
			</Grid>

			<NoticeCreateButton path={"pbs"}/>

			<NoticePagination count={data.length}/>
		</div>
	);
};

export default MyPbsNotice;