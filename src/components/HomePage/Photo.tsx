import React, {FC} from 'react';
import styled from 'styled-components';

import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';

import {IPhoto} from '../../api-ifc/IPhoto'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const StyledImg = styled.img<{rad: number}>`
border-radius: ${props => props.rad }px;

`;
interface ImgVals{
    idPhoto?: string;
     w?: string;
     h?: string;
     r?: number;
}

export const Photo:FC<ImgVals> = ({idPhoto = "1", w= "600" ,h = "600", r=0 }: ImgVals) => {

    const [api, setData] = useState<IPhoto | null>(null);
    useEffect(() => {
        axios.get<IPhoto>(`${BASE_URL}/photos//${idPhoto}`)
        .then((response : AxiosResponse)  => setData(response.data))
        .catch(console.error);
      }, []);

    const url : string = api && api.url ?  api.url :"";
    {console.log("idPhoto"+idPhoto)}
    return <StyledImg rad={r} src={url} height={h} width={w}/>;

}