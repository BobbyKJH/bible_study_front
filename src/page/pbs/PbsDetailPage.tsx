import React, { useCallback, useEffect } from 'react';
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

	return (
		<PbsDetailContainer>
			<PbsDetailTitleBox>
				<DetailBook book={data.book}/>

				<div>
					<span>
						{data.chapter}장
					</span>
					<span>
						{data.startVerse}
					</span>
					:
					<span>
						{data.endVerse}
					</span>
				</div>
			</PbsDetailTitleBox>

			<hr/>
			<DetailContent content={data.content}/>

			<DetailButtonGroup
				uuid={data.uuid}
				id={data.id}
				path={"pbs"}
				handleDelete={handleDelete}
			/>
		</PbsDetailContainer>
	);
};

export default PbsDetailPage;