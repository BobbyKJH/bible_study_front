import React from "react";
/** Type */
import Bible from "@/type/Bible";
import { HomeViewNoticeContainer, ViewNotice } from "@components/home/HomeViewNotice.styled";

interface Props {
  data: Bible.Notice[];
  link: string;
}

const HomeViewNotice: React.FC<Props> = ({ data, link }) => {

  if(data.length === 0) {
    return (
      <div>데이터가 존재 하지 않습니다.</div>
    )
  }

  return (
    <>
      {data.map((notice, idx) => (
        <HomeViewNoticeContainer to={`/home/${link}/${notice.id}`} key={notice.id} style={{display:"flex"}}>
          <ViewNotice width={5} text="center" font=".8rem">
          {idx + 1}.
          </ViewNotice>
          
          <ViewNotice width={75} text="left" font="1rem" noWrap>
            {notice.content}
          </ViewNotice>

          <ViewNotice width={10} text="right" font=".8rem">
          {notice.userName}
          </ViewNotice>

          <ViewNotice width={10} text="right" font=".8rem">
          {notice.view}회
          </ViewNotice>
        </HomeViewNoticeContainer>
      ))}
    </>
  )
};

export default HomeViewNotice;