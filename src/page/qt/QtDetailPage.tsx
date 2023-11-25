import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
/** Hook */
import useSnack from '@/hook/useSnack.ts';
/** Api */
import { useQTDeleteMutation, useQTDetailQuery } from '@/api/QTQuery.ts';
/** Component */
import DetailBook from '@components/detail/DetailBook.tsx';
import DetailContent from '@components/detail/DetailContent.tsx';
import DetailButtonGroup from '@components/detail/DetailButtonGroup.tsx';
/** Style */
import { PbsDetailContainer, PbsDetailTitleBox } from '@page/pbs/PbsDetailPage.styled.ts';

const QtDetailPage: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { handleOpenSnack } = useSnack();

	const { data, isLoading } = useQTDetailQuery(id as string);
	const { mutate } = useQTDeleteMutation()

	const handleDelete = useCallback(() => {
		mutate(data.id, {
				onSuccess: () => {
					handleOpenSnack({ message: "삭제 완료", severity: "error" });
					navigate("/home/qt?page=1&book=", { replace: true })
				}
			}
		)
	}, [isLoading]);

	if(isLoading) return <p>hello</p>

	return (
		<PbsDetailContainer>
			<PbsDetailTitleBox>
				<DetailBook book={data.book}/>

				<div>
					{data.chapter}
					{data.startVerse}
					{data.endVerse}
				</div>
			</PbsDetailTitleBox>

			<hr/>
			<DetailContent content={data.content}/>

			<DetailButtonGroup
				userId={data.userId}
				id={data.id}
				path={"qt"}
				handleDelete={handleDelete}
			/>
		</PbsDetailContainer>
	);
};

export default QtDetailPage;