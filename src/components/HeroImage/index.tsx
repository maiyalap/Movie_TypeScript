import react from "react";

// styled
import { Wrapper, Content, Text } from "./HeroImage.styles";

//Types
type Props ={
    image: string;
    title: string;
    text: string;
    
}


const HeroImage: React.FC<Props> = ( { image,title,text } ) => (
    <Wrapper image={image}>
        <Content>
            <text>
               <h1>{title}</h1> 
               <p>{text}</p>
            </text>
        </Content>
    </Wrapper>

);

export default HeroImage;

