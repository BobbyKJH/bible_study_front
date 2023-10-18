/** React */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
/** Api */
import { useQTDeleteMutation, useQTDetailQuery } from '@/api/QTQuery.ts';
/** Component */
import TextReadMultiField from '@components/read/TextReadMultiField.tsx';
/** Style */
import { Button, Paper } from '@mui/material';
import { PageContainer } from '@style/common/PageStyle.ts';
import { FooterContainer } from '@style/common/FooterStyle.ts'

const QTReadPage: React.FC = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	/** 상세 페이지 */
	const { data, isLoading } = useQTDetailQuery(id as string);
	/** 삭제 */
	const { mutate } = useQTDeleteMutation();

	const deleteBtn = (): void => {
		if(window.confirm("글을 삭제하시겠습니까?")){
			mutate(Number(id), { onSuccess: () => {
						alert("삭제 하였습니다.")
						navigate( "/qt" )
					}
				}
			)
		}
	};

	const handleBackPage = () => {
		navigate("/qt")
	}

	return (
		<PageContainer>
			{
				!isLoading ?
					<Paper elevation={0} sx={{ maxWidth: "lg", margin: "20px auto" }}>
						<h1>{data.book}</h1>
						<span>{data.chapter}장</span>
						<div>
							<span>{data.startVerse}절</span>
							<span>{data.endVerse}절</span>
						</div>

						<hr/>

						<TextReadMultiField value={data.content}/>


						<FooterContainer content={"space-between"}>
							<div>
								<Button variant="outlined" onClick={handleBackPage}>나가기</Button>
								{
									sessionStorage.getItem("userId") === data.userId
									&&
									<>
										<span>
										<Button variant="contained" sx={{ margin: "0 20px"}}>
											<Link to={`/qt/edit/${id}`} style={{ color: "#fff" }}>
												수정
											</Link>
										</Button>

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

export default QTReadPage;