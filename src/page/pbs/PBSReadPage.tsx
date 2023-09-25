/** React */
import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
/** Component */
import TextReadMultiField from '@components/read/TextReadMultiField.tsx'
import TextReadSelect from '@components/read/TextReadSelect.tsx'
import TextReadNumber from '@components/read/TextReadNumber.tsx'
/** Api */
import { useDeleteMutation, useDetailQuery } from '@/api/PBSQuery.ts'
/** Type */
/** Style */
import { PageContainer } from '@style/common/PageStyle.ts'
import { Paper, Tooltip } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { BiSolidTrashAlt } from 'react-icons/bi'



const PBSReadPage: React.FC = () => {
	const navigate = useNavigate();

	const { id } = useParams();
	/** 상세 페이지  */
	const { data, isLoading } = useDetailQuery(id as string);
	/** 제거 */
	const { mutate } = useDeleteMutation();

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

					{
						sessionStorage.getItem("userId") === data.userId
						&&
						<>
							<Tooltip title="삭제" onClick={deleteBtn}>
								<IconButton>
									<BiSolidTrashAlt/>
								</IconButton>
							</Tooltip>

              <Tooltip title="수정">
								<Link to={`/pbs/edit/${id}`}>
									<IconButton>
										<BiSolidTrashAlt/>
									</IconButton>
                </Link>
              </Tooltip>
            </>
					}

				</Paper>
				:
				null
			}
		</PageContainer>
	);
};

export default PBSReadPage;