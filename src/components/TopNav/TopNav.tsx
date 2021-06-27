import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {Colors} from '../../styleHelpers/Colors';

import {ExpMenu} from './ExpMenu';


const Divnav = styled.div`
font-size: 30px;
font-family: "Times New Roman";
backgroud: ${Colors.black};
text-align: center;
padding: 15px;
position: sticky;
height: 40px;

background-color: white;
`;

const Logo = styled.img`
padding: 10px;
margin: 2px;

border: 1px solid grey;
border-radius: 22px;

`;

const InputCustom = styled.input`
background: url(./media/icons/search.png) no-repeat scroll 7px 7px;
background-position: 95%;
border-radius: 10px;
padding-left: 40px;
padding-right: 40px;
height: 37px;
margin-left: 200px;
margin-right: 200px;
width:600px


`;
const Element = styled.div`

float:left;
`;
const ElementBlock = styled.div`

clear:both;
`;

const First = styled.div`
margin-left: 20px;
margin-right: 20px;
width: 2%;

float:left;
`;

const Second = styled.div`

margin-left: 20px;
margin-right: 20px;
width: 30%;
float:left;
`;

const Third = styled.div`
margin-left: 20px;
margin-right: 20px;
float:right;
`;

interface Props {
    name: string;
    color: string;
  }
  
  


export const TopNav = () => {
    return (

        <Divnav>
            <First><Link to='/'><Element>            <img src="./media/icons/entities.png"/></Element></Link> </First>
            <Second>  <Element> <ExpMenu/> </Element></Second>
            <Third> <Element>  <InputCustom placeholder="Placeholder rzeczy rzeczy"/> </Element>
            <Element><Link to='/entities'><Logo src="./media/icons/bell.png"/></Link>  </Element>
            <Element><Link to='/publications'><Logo src="./media/icons/cog.png"/></Link>  </Element>
            <Element><Link to='/people'><Logo src="./media/icons/network.png"/></Link>  </Element></Third>

    
            <ElementBlock></ElementBlock>
        </Divnav>
    );
}