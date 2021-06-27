import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';
import {IPost} from '../../api-ifc/IPost';
import { useState } from 'react';
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {Photo} from './Photo';
import { IComment } from '../../api-ifc/IComment';
import { StyledLink } from '../../styleHelpers/StyledLink';


const Wrapper = styled.div`
`;

const Divnav = styled.div`
font-size: 15px;
font-family: "Times New Roman";
text-align: left;
padding:15px;
margin:15px;
border-radius: 6px;
box-shadow: 2px 2px 5px grey;
border: 1px solid black;
width:80%;
background-color:white;
}
`;
const Header = styled.div`
font-size: 20px;
text-align: right;
text-transform: capitalize;
color: darkblue;
`
const Body = styled.div`
padding:1px;
font-size: 15px;
text-align: right;
color: dark-grey;

`
const Footer = styled.div`
padding:1px;
font-size: 15px;
text-align: right;
color: black;

`

const Em = styled.em`
padding:1px;
font-size: 15px;
text-align: right;
color: black;
font-weight: bold
`

const Logo = styled.div`
float: left;
width:10%;
padding:10px;
`

const Com = styled.div`
float: left;
width:85%;
`

const Cl = styled.div`
clear: both;
`
interface propsComment{
     data: IComment[]
}


export const CommentBlock: FC<propsComment> = ({data = [] }: propsComment) => {
    const IconNames = ["administration", "bell", "ecosystem", "settings", "entities", "entitites2", "house2", "network" , "people", "privacy"];
    return (
        <div>
        {data.map( (val: IComment )=> (
            <Divnav>
                <Logo> <img src={`./media/icons/${IconNames[(Math.floor(Math.random() * (9)))]}.svg`} height={50} /></Logo>
                <Com>
                <StyledLink to={`comment/${val.id}`}>
                    <Header> {val.name}</Header>           
                </StyledLink> 
                <Body> {val.body}</Body>
                <Footer> Updated { (Math.floor(Math.random() * (10 - 1)) + 1).toString()} ago by <Em> {val.email}</Em> </Footer>
                </Com>
                <Cl/>
            </Divnav>
        ) )}
        </div>
    )
}


