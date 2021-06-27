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
backgroud: ${Colors.black};
text-align: left;
float: left;
padding-left:40px;
`;

const Post = styled.div`
font-size: 15px;
`;
const Title = styled.div`

font-size: 22px;
`;
const Left = styled.div`
width:13%;
float: left;
`;
const Right = styled.div`
width:77%;
float: left;
`;

interface PublicationProps{
    data?:IPost;
}
const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const Publication: FC<PublicationProps> = ({data = {id:"", title:"", body:"", userId:""}} :PublicationProps) => {



    const idph: string = (Math.floor(Math.random() * (10 - 1)) + 1).toString();

    return (
        <Divnav>

            
           <Left> <Photo idPhoto={idph} w="100" h="100"/></Left>
           <Right>
            <Title>Title: {data.title}</Title>
            <Post>body: {data.body}</Post>
            </Right>

        </Divnav>
    );
}