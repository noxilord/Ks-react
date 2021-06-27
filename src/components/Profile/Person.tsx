import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getUser, getUsers } from '../../actions/userActions';


import {IUser} from '../../api-ifc/IUser'
import { IState } from '../../reducers';
import { Photo } from '../HomePage/Photo';
import {IUserReducer} from '../../reducers/userReducers';
import { Information } from './Information';
import { Panel } from './Panel';
import {MdEdit} from 'react-icons/md'

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
`;

const Divnav = styled.div`
font-size: 20px;
font-family: "Times New Roman";
background-color: white;
text-align: right;
margin-right:1%;
`;
const Block =  styled.div`
float: left;
padding: 15px;
margin: 15px;
`;
const Wrapper = styled.div`
padding: 15px;
margin-right:1%;
width: 80%;
float: right;
`

const Btn = styled.div`
padding: 10px;
float:right;

`;

const Cb = styled.div`
clear: both;
`;
const A = styled.div`
text-align: center;
`
type PostParams = {
    id: string;
  };
type GetUser = ReturnType<typeof getUser>;

interface props{
    users: IUser[],
}
export const Person: FC<props> = ({users = [] }: props)=> {
    const [editMode, setMode] = useState(false);
    const handleClick =() => {setMode(!editMode); }
    const { id }= useParams<PostParams>();
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch<GetUser>(getUser(id));
    // }, []);
    // const rec  = useSelector<IState, IUserReducer> (state =>({
    //     ...state.users
    // }));
    const [us, setUs] = useState(users);
    console.log(users[1]);

    const userId: number = Number(id) -1;
    console.log(userId);
    const [name, setName] = useState(users[0].name);
    const [city, setCity] = useState(users[0].address.city);
    const [company, setCompany] = useState(users[0].company.name);
    const [phone, setPhone] = useState(users[0].phone);
    const [email, setEmail] = useState(users[0].email);
    return (
        <Wrapper>
        <Divnav><Btn><button onClick={handleClick}>     <MdEdit/>   </button></Btn> </Divnav>
        

        <Divnav><Block><Photo idPhoto={"1"} w="200" h="200" r={100}/><br/><br/><A><a href="#">See profile</a></A></Block>
        {editMode!=true &&
        <Block>
            <Block>
            {name} <br/>
             {city}     <br/>
             {company} <br/></Block>
             <Block>
             {phone} <br/>
             {email} <br/>
        
             </Block></Block>
             }
             {editMode===true &&
             <form onSubmit={handleClick}>
             <Block>
             <input type="text" value={name}  onChange={e => setName(e.target.value)}/><br/>
             <input type="text" value={city}  onChange={e => setCity(e.target.value)}/><br/>
             <input type="text" value={company}  onChange={e => setCompany(e.target.value)}/><br/>
             </Block>
             <Block>
             <input type="text" value={phone}  onChange={e => setPhone(e.target.value)}/><br/>
             <input type="text" value={email}  onChange={e => setEmail(e.target.value)}/><br/>
             <input type="submit" value="Update" />
             </Block>
             </form>}


    
<Cb></Cb>
        <br/></Divnav>
        
        <Divnav> 
        <Information edit={editMode}></Information>
        <br/>
        </Divnav>

        <Divnav> 
        <Panel edit={editMode}></Panel>
        </Divnav>

        </Wrapper>
    );
}