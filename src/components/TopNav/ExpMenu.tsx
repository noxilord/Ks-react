import React, { ChangeEvent, useState } from 'react';


import styled from 'styled-components';
import {Colors} from '../../styleHelpers/Colors';

import useDropdown from 'react-dropdown-hook';
import { LinkElement } from './LinkElement';
import { Link } from 'react-router-dom';
import {StyledLink} from '../../styleHelpers/StyledLink'

const Wrapper = styled.div`
position: absolute;
float:left;
z-index: 9999;
`;
const Exp = styled.div`
width: 300px;
z-index: 10;
`
const Open = styled.div`

background-color: lightgray;
border-radius:20px;
width:300px;
position: relative;
z-index: 9999;
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
width:190px


`;
const Left = styled.div`
padding-right:160px;
float: left;
`;
const Right = styled.div`
margin:auto;
float: right;
font-size: 17px;
margin-top: 10px;
`;
const Logo = styled.img`
margin-top:4px;
margin-right:7px;
float:left;
`;
export const ExpMenu = () => {

    const [inputText, setInputText] = useState<string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value;
        setInputText(text);
    }
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
    return( 
<Wrapper>
          <div>
            <div ref={wrapperRef}>
              <Exp onClick={toggleDropdown}>
               <Left><Logo src="./media/icons/house.png"/>Home</Left>
               <Right>▼</Right>
              </Exp>
          {dropdownOpen &&
            <>
            <Open>
            <InputCustom type="text" value={inputText} onChange={inputHandler}/>
            {'Home'.toLowerCase().includes(inputText.toLowerCase()) && 
              <StyledLink  to ="/"> <LinkElement name="Home" urlLogo="./media/icons/house.png"></LinkElement></StyledLink>}
            {'Publication'.toLowerCase().includes(inputText.toLowerCase()) && 
             <StyledLink  to ="/publications"> <LinkElement name="Publication" urlLogo="./media/icons/administration.png"></LinkElement></StyledLink>}
               {'Test'.toLowerCase().includes(inputText.toLowerCase()) && 
             <StyledLink  to ="/publications"> <LinkElement name="Test" urlLogo="./media/icons/ecosystem.png"></LinkElement></StyledLink>}
               {'Nazwa'.toLowerCase().includes(inputText.toLowerCase()) && 
             <StyledLink  to ="/publications"> <LinkElement name="Nazwa" urlLogo="./media/icons/network.png"></LinkElement></StyledLink>}
               {'InnaNazwa'.toLowerCase().includes(inputText.toLowerCase()) && 
             <StyledLink  to ="/publications"> <LinkElement name="InnaNazwa" urlLogo="./media/icons/people.png"></LinkElement></StyledLink>}
               {'JeszczeInnaNazwa'.toLowerCase().includes(inputText.toLowerCase()) && 
             <StyledLink  to ="/publications"> <LinkElement name="JeszczeInnaNazwa" urlLogo="./media/icons/settings.png"></LinkElement></StyledLink>}
             </Open>
        </> 
	    }
      </div>
      <div></div>
    </div>
    </Wrapper>
    );
}