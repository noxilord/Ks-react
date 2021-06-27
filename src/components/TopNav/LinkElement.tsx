import React, {FC} from 'react';
import styled from 'styled-components';

const StyledLink = styled.div`
margin: 2px;
text-decoration: none;

font-size: 23px;
font-family: "Times New Roman";
margin-left: 15px;
padding-bottom: 10px;
float:left;
`;

const Logo = styled.img`
padding-top: 4px;
float:left;
`;

const Cl = styled.div`
clear:both;
`;

const Wrapper = styled.div`
width: 90%;
margin: auto;
`;

interface LinkVars{
    urlLogo: string;
    name: string;
}
// export const Photo:FC<ImgVals> = ({idPhoto = "1", w= "600" ,h = "600" }: ImgVals) => {


export const LinkElement: FC<LinkVars> = ({urlLogo, name}:LinkVars) => {
    return (
        <Wrapper>
        <Logo src={urlLogo}/>
        <StyledLink>
          {name}
        </StyledLink>
        <Cl/>
        </Wrapper>


    );
}