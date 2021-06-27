import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { IComment } from '../api-ifc/IComment';


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

export const Comment: FC = () => {
    const { id }= useParams<PostParams>();
    const [api, setData] = useState<IComment | null>(null);
    useEffect(() => {
        axios.get<IComment>(`${BASE_URL}/comments/${id}`)
        .then((response : AxiosResponse)  =>
        {
            setData(response.data);
            console.log(response);
        } )
        .catch(console.error);
      }, []);

    const data : IComment = api ?  api  :{ id:"", postId:"",name:"", body:"", email:""};
    return (
        <div>

            <Divnav>id:  {data.id}  </Divnav>
            <Divnav>name:  {data.name}  </Divnav>
            <Divnav>body:  {data.body}  </Divnav>
            <Divnav>postID:  {data.postId}  </Divnav>
            <Divnav>email:  {data.email}  </Divnav>
        </div>
    );
}