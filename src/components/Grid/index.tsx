import React from "react";
//styled
import { Wrapper, Content } from "./Grid.styles";

//Style
type Props = {
    header: string;
}

const Grid: React.FC<Props> = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>        
    </Wrapper>

)

export default Grid;