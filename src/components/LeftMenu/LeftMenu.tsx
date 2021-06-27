import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Photo } from '../HomePage/Photo';
import { LinkElement } from '../TopNav/LinkElement';
import {StyledLink} from '../../styleHelpers/StyledLink'


const DivMenu = styled.div`
font-size: 30px;
font-family: "Times New Roman";
width: 14%;
padding: 15px;
float: left;
margin-left:1%;
font-size: 15px;

`;

  const Logo = styled.img`
  padding: 10px;
  margin: 2px;
  border: 1px solid grey;
  border-radius: 22px;
  
  `;

  const UserWrapper = styled.div`
  padding:5px;
  margin: 5px;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  `;

  const PhotoWrapper  = styled.div`
  width: 100px;
  height:100px;
  border: 1px solid grey;
  border-radius: 50px;
  margin:auto;
  `;


  const Cont  = styled.div`
  font-size: 20px;
  padding: 3px;
  margin: 2px;

  `;

  const Name  = styled.div<{rad: number, color: string}>`
  font-size: 20px;
  padding: 3px;
  margin: 2px;
  text-align: center;
  font-size: ${props => props.rad }px;
  color: ${props => props.color };
  `;


  const LinksWrapper  = styled.div`
  font-size: 20px;
  padding: 5px;
  margin: 2px;

  `;

  const Round  = styled.img`
  border-radius: 5px;
  border: 1px solid black;
  padding: 5px;
  float:right;
  `;
export const LeftMenu = () => {
    return (

     <DivMenu>
    <UserWrapper>
      <PhotoWrapper><Photo idPhoto="1" w="100" h="100" r={50}></Photo></PhotoWrapper>
     <Name rad={23} color="black"> <StyledLink to= "/person/1">Leanne Graham</StyledLink></Name>
     <Name rad={15} color="darkgrey"> Costam costam</Name>
      <StyledLink to= "/workspaces"><Cont>
        <img src="./media/icons/network.png"/>
           Your Network
        <Round src="./media/icons/plus.png"/>
           </Cont>   </StyledLink>
           <StyledLink to= "/workspaces"><Cont>
        <img src="./media/icons/publications.png"/>
           Your Publications
        <Round src="./media/icons/plus.png"/>
           </Cont>   </StyledLink>

    </UserWrapper>
    <LinksWrapper>
    <StyledLink to= "/"> <LinkElement name="Home" urlLogo="./media/icons/house.png"/></StyledLink>
        <StyledLink to= "/entities"> <LinkElement name="Entities" urlLogo="./media/icons/entities.png"/></StyledLink>
        <StyledLink to= "/people"> <LinkElement name="People" urlLogo="./media/icons/people.png"/> </StyledLink>
    </LinksWrapper>


     </DivMenu>
    );
}

