import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../reducers';
import { addInfoAdm, addInfoCou, addInfoExp, addInfoSpec, delInfoAdm, delInfoCou, delInfoExp, delInfoSpec, getInfoAdm, getInfoCou, getInfoExp, getInfoSpec } from '../../actions/profileActions';
import { ProfileReducer } from '../../reducers/ProfileReducer';
import {TiDelete} from 'react-icons/ti'

const Content = styled.div`
    max-width: 1200px;
    align-items: center;

`;

const Divnav = styled.div`
font-size: 20px;
font-family: "Times New Roman";

text-align: right;

padding: 15px;

margin-right:1%;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
`;

const Title = styled.h3`
color: #1e2124;
font-size: 25px;
text-align: left;
margin-top: 2px;
margin-left: 10px;
margin-bottom: 10px;
margin-top: 10px;
`;
const Body = styled.div`
color: #1e2124;
font-size: 19px;
text-align: left;
margin-top: 5px;
margin-left: 20px;
margin-bottom: 15px;
padding: 10px;
`;
const Item = styled.label`
background-color:#527da8;
color:#dfeaf5;
padding: 10px;
border-radius: 5px;
&:hover {
    color: white;
  }
  margin:5px;
`;
const DelButton = styled.button`

background-color: #527da8;
border: none;
color: white;
font-size: 22px;
&:hover {
      color: red;
    }
`

interface InfoParams{
    edit: boolean;
};
type getInfoAdm = ReturnType<typeof getInfoAdm>;
type addInfoAdm = ReturnType<typeof addInfoAdm>;
type delInfoAdm = ReturnType<typeof delInfoAdm>;

type getInfoExp = ReturnType<typeof getInfoExp>;
type addInfoExp = ReturnType<typeof addInfoExp>;
type delInfoExp = ReturnType<typeof delInfoExp>;

type getInfoSpec = ReturnType<typeof getInfoSpec>;
type addInfoSpec = ReturnType<typeof addInfoSpec>;
type delInfoSpec = ReturnType<typeof delInfoSpec>;

type getInfoCou = ReturnType<typeof getInfoCou>;
type addInfoCou = ReturnType<typeof addInfoCou>;
type delInfoCou = ReturnType<typeof delInfoCou>;

export const Information: FC<InfoParams> = ({edit}:InfoParams) => {
    const dispatch = useDispatch();
       const rec  = useSelector<IState, ProfileReducer> (state =>({
        ...state.profile}));
    const exp = rec.expertise;
    const adm = rec.admission;
    const spec = rec.specialties;
    const cou = rec.counties;
    const deleteExp =(val: string) => {
        dispatch<delInfoExp>(delInfoExp(val));
    }
    const [expvalue, setExpValue] = useState("");
    const handleClickExp =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addInfoExp>(addInfoExp(expvalue));
    }

    const deleteAdm =(val: string) => {
        dispatch<delInfoAdm>(delInfoAdm(val));
    }
    const [admvalue, setAdmValue] = useState("");
    const handleClickAdm =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addInfoAdm>(addInfoAdm(admvalue));
    }

    const deleteSpec =(val: string) => {
        dispatch<delInfoSpec>(delInfoSpec(val));
    }
    const [specvalue, setSpecValue] = useState("");
    const handleClickSpec =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addInfoSpec>(addInfoSpec(specvalue));
    }

    const deleteCou =(val: string) => {
        dispatch<delInfoCou>(delInfoCou(val));
    }
    const [couvalue, setCouValue] = useState("");
    const handleClickCou =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addInfoCou>(addInfoCou(couvalue));
    }

    return (
        <div>
        <Divnav>
           <Title>Expertise</Title> 
           <Body>
             {exp.map( (val: string )=> (
            <Item> {val}
             {edit==true &&<DelButton onClick={()=>deleteExp(val)}><TiDelete/></DelButton> }
            </Item>
           
        ))}

        {edit==true &&
              <form onSubmit={handleClickExp}><br/>
              <label>
                Add new:
                <input type="text" value={expvalue}  onChange={e => setExpValue(e.target.value)}/>
              </label>
              <input type="submit" value="Dodaj" />
            </form>
        }
        </Body>

    <Title>Specialities</Title>
<Body>
    {adm.map( (val: string )=> (
        <Item> {val}
        {edit==true &&<DelButton onClick={()=>deleteAdm(val)}><TiDelete/></DelButton> }
       </Item>
        ))}

        {edit==true &&
              <form onSubmit={handleClickAdm}>
                  <br/>
              <label>
                Add new:
                <input type="text" value={admvalue}  onChange={e => setAdmValue(e.target.value)}/>
              </label>
              <input type="submit" value="Dodaj" />
            </form>
        }
        </Body>

        <Title>Couties</Title>
        <Body>
        {cou.map( (val: string )=> (
                    <Item> {val}
                    {edit==true &&<DelButton onClick={()=>deleteCou(val)}><TiDelete/></DelButton> }
                   </Item>

        ))}

        {edit==true &&
              <form onSubmit={handleClickCou}><br/>
              <label>
                Add new:
                <input type="text" value={couvalue}  onChange={e => setCouValue(e.target.value)}/>
              </label>
              <input type="submit" value="Dodaj" />
            </form>
        }
    </Body>

    <Title>Specialities</Title>
    <Body>
        {spec.map( (val: string )=> (
            <Item> {val}
            {edit==true &&<DelButton onClick={()=>deleteSpec(val)}><TiDelete/></DelButton> }
            </Item>
        ))}

        {edit==true &&
              <form onSubmit={handleClickSpec}><br/>
              <label>
                Add new:
                <input type="text" value={specvalue}  onChange={e => setSpecValue(e.target.value)}/>
              </label>
              <input type="submit" value="Dodaj" />
            </form>
        }
    </Body>
    </Divnav>
    </div>
    );
}