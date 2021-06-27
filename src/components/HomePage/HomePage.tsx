import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';

import {PhotoWrapper} from './PhotoWrapper';
import {LatestPub} from './LatestPub';
import {Workspaces} from './Workspaces';
import { Comments } from './Comments';
import { IComment } from '../../api-ifc/IComment';
import { IPost } from '../../api-ifc/IPost';


const Wrapper = styled.div`
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    backgroud: ${Colors.white};
`;



const Divnav = styled.div`

font-size: 30px;
font-family: "Times New Roman";
backgroud: ${Colors.black};
text-align: center;
padding: 15px;

width: 80%;
float: right;
margin-right:1%;

`;

interface props{
    comments: IComment[],
    posts: IPost[]
}

export const HomePage:  FC<props> = ({comments = [] , posts =[]}: props)=> {
    return (
        <Divnav>
            <LatestPub posts={posts}/>
            <PhotoWrapper/>
            < Workspaces />
            <Comments comments={comments}/>
        </Divnav>
    );
}