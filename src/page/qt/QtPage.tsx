import NoticeCreateButton from '@components/notice/NoticeCreateButton.tsx';
import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** Api */
import { useQTQuery } from '@/api/QTQuery.ts';
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx';
import NoticeBible from '@components/notice/NoticeBible.tsx';
import NoticePagination from '@components/notice/NoticePagination.tsx';
import NoticeLoadingItem from '@components/notice/NoticeLoadingItem.tsx';
/** Type */
import Bible from '@type/Bible';

const QtPage: React.FC = () => {
	const [searchParams] = useSearchParams();
	/** Http Query */
	const page = searchParams.get("page");
	const book = searchParams.get("book");
	/** Pbs 게시판 */
	const { data, isLoading, refetch } = useQTQuery(Number(page), book as string);

	useEffect(() => {
		refetch();
	}, [searchParams])

	if(isLoading) return <NoticeLoadingItem/>

	return (
		<div>
			<NoticeBible/>

			{
				data.qt.map((notice: Bible.Notice) => (
					<Link to={`/home/qt/${notice.id}`} key={notice.id}>
						<NoticeItem
							book={notice.book}
							startVerse={notice.startVerse}
							endVerse={notice.endVerse}
							chapter={notice.chapter}
						/>
					</Link>
				))
			}

			<NoticeCreateButton path={"qt"}/>

			<NoticePagination count={data.length}/>
		</div>
	);
};

export default QtPage;