import React from "react";
import { useAdminQuery } from "@/api/AdminQuery";
import {
  PbsBibleContainer,
  PbsBibleTitle,
  PbsBibleSubTitleContainer,
  PbsBibleSubTitle,
} from "@/components/home/PbsBible.styled";

const PbsBible: React.FC = () => {
  const { data, isLoading } = useAdminQuery();

  if (isLoading) {
    return <PbsBibleContainer>Bible</PbsBibleContainer>;
  }

  console.log(!isLoading && data);

  return (
    <PbsBibleContainer>
      <PbsBibleTitle>{data.book}</PbsBibleTitle>
      <PbsBibleSubTitleContainer>
        <PbsBibleSubTitle>{data.chapter}장</PbsBibleSubTitle>
        <PbsBibleSubTitle>{data.startVerse}장</PbsBibleSubTitle>
        <PbsBibleSubTitle>-</PbsBibleSubTitle>
        <PbsBibleSubTitle>{data.endVerse}장</PbsBibleSubTitle>
      </PbsBibleSubTitleContainer>
    </PbsBibleContainer>
  );
};

export default PbsBible;
