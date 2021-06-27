import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';

import {Photo} from './Photo';
import {LatestPub} from './LatestPub';
import {Workspaces} from './Workspaces';


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

text-align: center;


width: 30%;
float: left;
margin: auto;
position: relative;
z-index: 1;
`;

const Text= styled.div`
font-size: 14px;
font-family: "Times New Roman";

text-align: left;
top:70%;
left:10%;
position: absolute;
width:80%
`;

export const PhotoWrapper: FC = () => {
    return (
        <Divnav>
                        <Text>
Title: eum et est occaecati
body: ullam et saepe reiciendis voluptatem adipisci sit amet autem <br/>assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit</Text>
            <Photo idPhoto="5" w="400" h="400"/>

        </Divnav>
    );
}