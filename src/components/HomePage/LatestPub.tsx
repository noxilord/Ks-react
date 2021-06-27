import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';


import {Publication} from './Publication'
import {StyledLink} from '../../styleHelpers/StyledLink'
import { IPost } from '../../api-ifc/IPost';
const Wrapper = styled.div`
`;

const Divnav = styled.div`
font-size: 30px;
font-family: "Times New Roman";
background-color: white;
text-align: left;
margin: auto;
margin-top: 0px;
width: 61%;
float: left;
padding: 5px;
height:390px;
border-radius: 2px;

`;
const Text = styled.div`
padding: 5px;
margin-bottom: 10px;
margin-left: 20px;
`;

interface props{
    posts: IPost[]
}

export const LatestPub:  FC<props> = ({ posts =[]}: props)=> {
    return (
        <Divnav>
           <Text> Latest publications</Text>
           <StyledLink to="post/2"><Publication data={posts[2]}/></StyledLink>
           <StyledLink to="post/3"><Publication data={posts[3]}/></StyledLink>
           <StyledLink to="post/4"><Publication data={posts[4]}/></StyledLink>
        </Divnav>
    );
}