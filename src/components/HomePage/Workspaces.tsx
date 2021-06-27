import React, {FC} from 'react';
import styled from 'styled-components';

import {Colors} from '../../styleHelpers/Colors';
import { WsBlock } from './WsBlock';




const Wrapper = styled.div`
`;

const Divnav = styled.div`
font-size: 30px;
font-family: "Times New Roman";
backgroud: ${Colors.black};
text-align: center;
padding: 15px;
clear: both;
`;



export const Workspaces: FC = () => {
    return (
        <Divnav>
            
            <WsBlock title="Public" users={25} logo="administration"/>
            <WsBlock title="Corporate" users={10} logo="house"/>
            <WsBlock title="Client" users={66} logo="entities"/>
            <WsBlock title="Public" users={25} logo="administration"/>
            <WsBlock title="Corporate" users={10} logo="house"/>

        </Divnav>
    );
}