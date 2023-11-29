import styled from "styled-components";
import { BarChart, ResponsiveContainer } from "recharts";

export const PbsBarChart = styled(BarChart)`
  background-color: #fff;
  .recharts-cartesian-axis-tick {    
    font-size: 0.7rem;
    font-weight: 900;
    color: #000;
  }
`

export const PbsResponsiveContainer = styled(ResponsiveContainer)`
  aspect-ratio: 3/1;
`