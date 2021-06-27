import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styleHelpers/Colors';
import {IComment} from '../../api-ifc/IComment'
import { CommentBlock } from './CommentBlock';
import Pagination from '@material-ui/lab/Pagination';

const Divnav = styled.div`
font-size: 30px;
font-family: "Times New Roman";
backgroud: ${Colors.black};
text-align: center;
padding: 15px;
clear: both;
`;
const InputCustom = styled.input`
background: url(./media/icons/search.png) no-repeat scroll 7px 7px;
background-color: white;
background-position: 95%;
border-radius: 10px;
padding-left: 40px;
padding-right: 40px;
margin-top:10px;
margin-bottom:10px;
height: 37px;
width:600px
`;

interface propsComment{
    comments: IComment[]
}

export const Comments: FC<propsComment> = ({comments = [] }: propsComment)=> {
    console.log(comments);
    const [inputText, setInputText] = useState<string>('');
    const [page, setPage] = useState(1);

    return (
        <Divnav>
        <InputCustom type="text" value={inputText} onChange={e=>setInputText(e.target.value)} placeholder="Serach through comments"/>
        <CommentBlock data={comments.filter( val=> (
                  val.name.toLowerCase().includes(inputText.toLowerCase()
                  ))).slice(page, page+10)}/>
        <Pagination count={10} page={page} onChange={(e, newpage)=>{setPage(newpage); console.log(page);}} />
        </Divnav>

    );
}