import React from 'react';
/** Component */
import NoticeBible from '@components/notice/NoticeBible.tsx';
import NoticeTableRow from '@components/notice/NoticeTableRow.tsx';
/** Type */
import Bible from '@type/Bible';
/** Style */
import { Table, TableBody, TableContainer, TableRow, TableCell } from '@mui/material';
import { NoticeTableCell, NoticeTableHeader } from '@components/notice/NoticeTable.styled.ts';

interface Props {
	data: Bible.Notice[];
	link: string
}

const NoticeTable: React.FC<Props> = ({ data, link }) => {
	return (
		<TableContainer>
			<Table aria-label="simple table">
				<NoticeTableHeader>
					<TableRow>
						<TableCell align="left" colSpan={2}>PBS</TableCell>
						<TableCell align="right" colSpan={2}>
							<NoticeBible/>
						</TableCell>
					</TableRow>
				</NoticeTableHeader>

				<NoticeTableHeader>
					<TableRow>
						<NoticeTableCell align="center" rowSpan={3}>성경</NoticeTableCell>
						<NoticeTableCell align="center">장</NoticeTableCell>
						<NoticeTableCell align="center">절</NoticeTableCell>
						<NoticeTableCell align="center">등록일</NoticeTableCell>
					</TableRow>
				</NoticeTableHeader>

				<TableBody>
					{data.map((notice) => (
						<React.Fragment key={notice.id}>
							<NoticeTableRow
								id={notice.id}
								book={notice.book}
								chapter={notice.chapter}
								startVerse={notice.startVerse}
								endVerse={notice.endVerse}
								createAt={notice.createAt}
								link={link}
							/>
						</React.Fragment>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default NoticeTable;