import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';


import {IPost} from '../api-ifc/IPost'

const BASE_URL = 'https://jsonplaceholder.typicode.com';


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

type PostParams = {
    id: string;
  };

export const Post: FC = () => {
    const { id }= useParams<PostParams>();
    const [api, setData] = useState<IPost | null>(null);
    useEffect(() => {
        axios.get<IPost>(`${BASE_URL}/posts/${id}`)
        .then((response : AxiosResponse)  =>
        {
            setData(response.data);
            console.log(response);
        } )
        .catch(console.error);
      }, []);

    const data : IPost = api ?  api  :{userId:"", id:"", title:"", body:""};
    return (
        <div>
            <Divnav>id:  {data.id}  </Divnav>
            <Divnav>title:  {data.title}  </Divnav>
            <Divnav>body:  {data.body}  </Divnav>
            <Divnav>userId:  {data.userId}  </Divnav>
        </div>
    );
}