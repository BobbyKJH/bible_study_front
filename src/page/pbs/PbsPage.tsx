import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
/** Api */
import { usePBSQuery } from '@/api/PBSQuery.ts';
/** Component */
import NoticeItem from '@components/notice/NoticeItem.tsx';
import NoticeBible from '@components/notice/NoticeBible.tsx';
import NoticePagination from '@components/notice/NoticePagination.tsx';
import NoticeLoadingItem from '@components/notice/NoticeLoadingItem.tsx';
/** Type */
import Bible from '@type/Bible';

const PbsPage: React.FC = () => {
	const [searchParams] = useSearchParams();
	/** Http Query */
	const page = searchParams.get("page");
	const book = searchParams.get("book");
	/** Pbs 게시판 */
	const { data, isLoading, refetch } = usePBSQuery(Number(page), book as string);

	useEffect(() => {
		refetch();
	}, [searchParams])

	if(isLoading) return <NoticeLoadingItem/>

	return (
		<div>
			<NoticeBible/>

			{data.pbs.map((notice: Bible.Notice) => (
				<Link to={`/home/pbs/${notice.id}`} key={notice.id}>
					<NoticeItem
						book={notice.book}
						startVerse={notice.startVerse}
						endVerse={notice.endVerse}
						chapter={notice.chapter}
					/>
				</Link>
			))}

			<NoticePagination count={data.length}/>
		</div>
	);
};

export default PbsPage;