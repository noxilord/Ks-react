import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';


import {IPost} from '../api-ifc/IPost'

const Wrapper = styled.div`
`;

const Content = styled.div`
    max-width: 1200px;
    align-items: center;

`;



const Divnav = styled.div`
font-size: 30px;
font-family: "Times New Roman";

text-align: center;
padding: 15px;
border: 2px dotted black;
width: 80%;
float: right;
margin-right:1%;
`;



export const Posts: FC = () => {

    

    return (
        <Divnav>
            Post router test
        </Divnav>
    );
}