import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
color:black;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
    &:hover{
        font-weight: bold;

    }
`;