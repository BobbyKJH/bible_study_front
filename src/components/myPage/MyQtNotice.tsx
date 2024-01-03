import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** Api */
import { useMyQTQuery } from '@/api/QTQuery.ts';
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx';
import NoticeBible from '@components/notice/NoticeBible.tsx';
import NoticePagination from '@components/notice/NoticePagination.tsx';
import NoticeLoadingItem from '@components/notice/NoticeLoadingItem.tsx';
import NoticeCreateButton from '@components/notice/NoticeCreateButton.tsx';
/** Type */
import Bible from '@type/Bible';

const MyQtNotice: React.FC = () => {
	const [searchParams] = useSearchParams();
	/** Http Query */
	const page = searchParams.get("page");
	const book = searchParams.get("book");

	const { data, isLoading, refetch } = useMyQTQuery(sessionStorage.getItem("uuid"), Number(page), book as string)

	useEffect(() => {
		refetch();
	}, [searchParams])

	if(isLoading) return <NoticeLoadingItem/>

	return (
		<div>
			<NoticeBible/>

			<Grid container>
			{
				data.qt.map((notice: Bible.Notice) => (
					<Grid item xs={6} key={notice.id}>
						<Link to={`/home/qt/${notice.id}`}>
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

			<NoticeCreateButton path={"qt"}/>

			<NoticePagination count={data.length}/>
		</div>
	);
};

export default MyQtNotice;