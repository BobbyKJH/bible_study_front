/** React */
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
/** Api */
import { useQTDeleteMutation, useQTDetailQuery } from '@/api/QTQuery.ts';
/** Component */
import TextReadSelect from '@components/read/TextReadSelect.tsx';
import TextReadNumber from '@components/read/TextReadNumber.tsx';
import TextReadMultiField from '@components/read/TextReadMultiField.tsx';
/** Style */
import { Paper, Tooltip } from '@mui/material';
import { PageContainer } from '@style/common/PageStyle.ts';
import { FooterContainer } from '@style/common/FooterStyle.ts'
/** Icon */
import { BiSolidTrashAlt } from 'react-icons/bi';
import IconButton from '@mui/material/IconButton';

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

	return (
		<PageContainer>
			{
				!isLoading ?
					<Paper sx={{ maxWidth: "lg", margin: "20px auto" }}>
						<h1>{data.book}</h1>
						<span>{data.chapter}장</span>
						<div>
							<span>{data.startVerse}절</span>
							<span>{data.endVerse}절</span>
						</div>

						<TextReadSelect value={data.book}/>

						<div style={{display: "flex", justifyContent: "space-between"}}>
							<TextReadNumber value={data.chapter} verse={"장"}/>

							<div style={{display: "flex", alignItems: "center"}}>
								<TextReadNumber value={data.startVerse} verse={"절"}/>
								<div style={{display: "flex", alignItems: "center", height: "100%"}}>&nbsp; ~ &nbsp;</div>
								<TextReadNumber value={data.endVerse} verse={"절"}/>
							</div>

							<TextReadNumber value={data.chapter} verse={"장"}/>
						</div>

						<TextReadMultiField value={data.content}/>


						<FooterContainer content={"right"}>
							<div>
								{
									sessionStorage.getItem("userId") === data.userId
									&&
									<>
										<Tooltip title="수정">
											<Link to={`/qt/edit/${id}`}>
												<IconButton>
													<BiSolidTrashAlt/>
												</IconButton>
											</Link>
										</Tooltip>

										<Tooltip title="삭제" onClick={deleteBtn}>
											<IconButton>
												<BiSolidTrashAlt/>
											</IconButton>
										</Tooltip>
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