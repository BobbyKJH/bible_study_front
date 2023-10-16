/** React */
import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
/** Component */
import TextReadMultiField from '@components/read/TextReadMultiField.tsx'
/** Api */
import { usePBSDeleteMutation, usePBSDetailQuery } from '@/api/PBSQuery.ts'
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import { Paper, Tooltip } from '@mui/material'
/** Icon */
import { BiSolidTrashAlt } from 'react-icons/bi'
import IconButton from '@mui/material/IconButton'
import { FooterContainer } from '@style/common/FooterStyle.ts'



const PBSReadPage: React.FC = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	/** 상세 페이지  */
	const { data, isLoading } = usePBSDetailQuery(id as string);
	/** 제거 */
	const { mutate } = usePBSDeleteMutation();

	const deleteBtn = () => {
		if(window.confirm("글을 삭제하시겠습니까?")){
			mutate(Number(id), { onSuccess: () => {
						alert("삭제 하였습니다.")
						navigate( "/pbs" )
					}
				}
			)
		}
	};

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


					<FooterContainer content={"right"}>
						<div>
							{
								sessionStorage.getItem("userId") === data.userId
								&&
								<>
                  <Tooltip title="수정">
                    <Link to={`/pbs/edit/${id}`}>
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

export default PBSReadPage;