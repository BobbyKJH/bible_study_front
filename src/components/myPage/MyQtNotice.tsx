import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** Cookie */
import { getCookie } from '@/libs/cookie.ts';
/** Api */
import { useMyQTQuery } from '@/api/QTQuery.ts';
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx';
import NoticeLoadingItem from '@components/notice/NoticeLoadingItem.tsx';
import NoticePagination from '@components/notice/NoticePagination.tsx';
/** Type */
import Bible from '@type/Bible';

const MyQtNotice: React.FC = () => {
	const [searchParams] = useSearchParams();
	/** Http Query */
	const page = searchParams.get("page");
	const book = searchParams.get("book");

	const { data, isLoading, refetch } = useMyQTQuery(getCookie("userId"), Number(page), book as string)

	useEffect(() => {
		refetch();
	}, [searchParams])

	if(isLoading) return <NoticeLoadingItem/>

	return (
		<div>
			{
				data.pbs.map((notice: Bible.Notice) => (
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

			<NoticePagination count={data.length}/>
		</div>
	);
};

export default MyQtNotice;