import styled from "styled-components";
import { BarChart, ResponsiveContainer } from "recharts";

export const QTBarChart = styled(BarChart)`
  background-color: #fff;
  .recharts-cartesian-axis-tick {    
    font-size: 0.7rem;
    font-weight: 900;
    color: #000;
  }
`

export const QtResponsiveContainer = styled(ResponsiveContainer)`
  aspect-ratio: 3/1;
`