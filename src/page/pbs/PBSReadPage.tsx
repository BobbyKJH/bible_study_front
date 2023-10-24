/** React */
import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
/** Sha256 */
import { sha256 } from 'js-sha256'
/** Cookie */
import { getCookie } from '@utils/cookie.ts'
/** Hook */
import useSnack from '@/hook/useSnack.ts'
/** Atom */
import { DeleteSnackAtom } from '@/store/SnackAtom.ts'
import CreateSnack from '@components/common/snack/CreateSnack.tsx'
/** Component */
import TextReadMultiField from '@components/read/TextReadMultiField.tsx'
/** Api */
import { usePBSDeleteMutation, usePBSDetailQuery } from '@/api/PBSQuery.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import { Button, Paper } from '@mui/material'
/** Icon */
import { FooterContainer } from '@style/common/FooterStyle.ts'
import { NoticeDetailBook, NoticeDetailChapter, NoticeDetailTitle } from '@style/notice/NoticeStyle.ts'



const PBSReadPage: React.FC = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	/** 상세 페이지  */
	const { data, isLoading } = usePBSDetailQuery(id as string);
	/** 제거 */
	const { mutate } = usePBSDeleteMutation();

	const { handleSnackClick } = useSnack(DeleteSnackAtom);

	const deleteBtn = () => {
		const deleteSnack = handleSnackClick({ vertical: "bottom", horizontal: "right" });

		if(window.confirm("글을 삭제하시겠습니까?")){
			mutate(Number(id), { onSuccess: () => {
						navigate( "/pbs" );
						deleteSnack();
					}
				}
			)
		}
	};

	const handleBackPage = () => {
		navigate("/pbs")
	};

	return (
		<PageContainer>
			{
				!isLoading ?
				<Paper elevation={0} sx={{ maxWidth: "lg", margin: "20px auto" }}>
					<NoticeDetailTitle>
						<NoticeDetailBook>{data.book}</NoticeDetailBook>
						<div>
							<NoticeDetailChapter>{data.chapter}장</NoticeDetailChapter>

							<div>
								<span>{data.startVerse}</span>

								<div>-</div>

								<span> {data.endVerse}</span>
							</div>
						</div>
					</NoticeDetailTitle>
					<CreateSnack/>
					<hr/>

					<TextReadMultiField value={data.content}/>

					<FooterContainer content={"space-between"}>
						<div>
							<Button variant="outlined" onClick={handleBackPage}>나가기</Button>
							{
								getCookie("userId") === sha256(data.userId)
								&&
								<>
                  <span>
										<Link to={`/pbs/edit/${id}`}>
											<Button variant="contained" sx={{ margin: "0 20px"}}>
												수정
											</Button>
										</Link>

										<Button variant="outlined" color="error" onClick={deleteBtn}>
											삭제
										</Button>
									</span>
								</>
							}
						</div>
					</FooterContainer>
				</Paper>
				:
				null
			}
		</PageContainer>
	);
};

export default PBSReadPage;