import React, { useCallback } from 'react';
import useSnack from '@/hook/useSnack.ts';
import { useNavigate, useParams } from 'react-router';
/** Api */
import { usePBSDeleteMutation, usePBSDetailQuery } from '@/api/PBSQuery.ts';
/** Component */
import DetailBook from '@components/detail/DetailBook.tsx';
import DetailContent from '@components/detail/DetailContent.tsx';
import DetailButtonGroup from '@components/detail/DetailButtonGroup.tsx';
/** Style */
import { PbsDetailContainer, PbsDetailTitleBox } from '@page/pbs/PbsDetailPage.styled.ts';

const PbsDetailPage: React.FC = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const { handleOpenSnack } = useSnack();

	const { data, isLoading } = usePBSDetailQuery(id as string);
	const { mutate } = usePBSDeleteMutation()

	const handleDelete = useCallback(() => {
		mutate(data.id, {
				onSuccess: () => {
					handleOpenSnack({ message: "삭제 완료", severity: "error" });
					navigate("/home/pbs?page=1&book=", { replace: true })
				}
			}
		)
	}, [isLoading]);

	if(isLoading) return <p>hello</p>

	console.log( !isLoading && data );

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
				path={"pbs"}
				handleDelete={handleDelete}
			/>
		</PbsDetailContainer>
	);
};

export default PbsDetailPage;