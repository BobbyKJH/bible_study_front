import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeViewNoticeContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  transition: width .3s;
  &:hover{
      width: 100%;
      background-color: #80808040;
      transition: all .3s;
    }
`

export const ViewNotice = styled(Typography)<{ width: number, text: string | undefined, font: string }>`
  width: ${props => `${props.width}%`};
  text-align: ${props => props.text};
  font-size: ${props => props.font};
  font-weight: 700;
  box-sizing: border-box;
  padding-right: 10px;
`