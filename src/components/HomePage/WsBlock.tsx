import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';
import {IPost} from '../../api-ifc/IPost';
import { useState } from 'react';
import { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {Photo} from './Photo';


const Wrapper = styled.div`
`;

const Divnav = styled.div`
font-size: 15px;
font-family: "Times New Roman";
width: 200px;   
height: 150px;
text-align: left;
float: left;
margin:15px;
padding-top:0px;
position: relative;
border-radius: 6px;
box-shadow: 2px 2px 5px grey;
}
`;

const Post = styled.div`
font-size: 15px;
`;
const Title = styled.div`
float: right;
font-size: 20px;
color: dark-grey;
padding-right: 6px;
`;
const Left = styled.div`
width:13%;
float: left;
`;
const Right = styled.div`
width:77%;
float: left;
`;
const BottomL = styled.div`
position: absolute;
top:80%;
left:10px;
float:left;
`;
const BottomR = styled.div`
position: absolute;
top:83%;
left:50%;
float:left;
padding-left:7px;
`;

const Logo = styled.div`
border-top-left-radius: 6px;
border-top-rigth-radius: 6px;
position: absolute;
top:25%;
left:10px;
width: 60px;
height: 60px;
border: 1px solid black;
border-radius: 5px;
background-color: white;
padding-top:10px;
padding-left:10px;
padding-right:10px;
opacity: 0.9;
`
const BorderedImg = styled.img`
border-top-left-radius: 6px;
border-top-rigth-radius: 6px;
`;
interface PublicationProps{
    title:string;
    users: number;
    logo: string;
}
const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const WsBlock: FC<PublicationProps> = ({title, users, logo, }: PublicationProps) => {
    const idP :string = (Math.floor(Math.random() * (20 - 11)) + 11).toString();
    return (
        <Divnav>
<Photo idPhoto={idP} w="200" h="70"/><br/>
<Logo><BorderedImg src={`./media/icons/${logo}.svg`}  height="50"/></Logo>
            <Title>{title}</Title>
<BottomR>            <img src="./media/icons/people.svg" /> {users} users</BottomR>
<BottomL>            <img src={`./media/icons/${logo}.svg`}  /> {title} </BottomL>

        </Divnav>
    );
}