import React, {FC, useState} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styleHelpers/Colors';
import { IPost } from '../../api-ifc/IPost';
import { IUser } from '../../api-ifc/IUser';
import { Pagination } from '@material-ui/lab';

const Content = styled.div`
    max-width: 1200px;
    align-items: center;
    backgroud: ${Colors.white};
`;

const Divnav = styled.div`
font-family: "Times New Roman";
backgroud: ${Colors.black};
text-align: center;
padding: 15px;
width: 80%;
float: right;
margin-right:1%;
`;

const Img = styled.img`
width: 100%;
height: 400px;
border-radius: 25px;

`;
const Holdings = styled.div`
position:relative;
width: 80%;
margin-left: auto;
margin-right: auto;
`
const Napis = styled.div`
position: absolute;
width: 100%;
height: 35%;
top: 64%;
opacity: 80%;
border: 1px solid grey;
font-size: 30px;
background-color: white;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;
`
const Logo = styled.div`
float: left;
width:10%;
padding:10px;
padding:5px;
margin-top:10px;
margin-right: 20px;
`
const Title = styled.div`
margin-top: 13px;
padding: 5px;
font-size: 26px;
text-align: left;
margin-left:20px;
`;

const Body = styled.div`
font-size: 20px;
color: dark-grey;
text-align: left;

padding: 5px;
padding-left:30px;
`;

const Wsp = styled.div`
width: 80%;
margin-left: auto;
margin-right: auto;
border: 1px solid darkgrey;
background-color: white;
border-radius: 20px;
margin-bottom: 13px;
box-shadow: 3px 5px 5px #888888;
`;
const Button = styled.button<{color: string}>`
background-color:${props => props.color};
padding: 5px;
margin: 5px;
border-radius:3px;
border: 1px solid grey;
box-shadow: 2px 2px 2px #888888;
`;

interface props{
    users: IUser[],
    posts: IPost[]
}
interface PU{
    post: IPost,
    userName: string,
    type: string
}
export const Workspace:  FC<props> = ({users = [] , posts =[]}: props)=> {
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("All");
    const [word, setWord] = useState("");
    const [follow, setFollow] = useState("");
    const types = ["SAS", "SARL", "SB", "Communities", "POA"];
    const colors = ["#a86a6f", "#607ea3", "#67a669", "#edd38c", "#ad79ab"];
    const newUsers = users.slice(0,5);
    const getTypeForId=(id: number)=>{
        return types[id%5];
    }
    const getColorForType=(type: string)=>{
        return colors[types.indexOf(type)];
    }
    const getDivTypeForId=(id: number)=>{
        return <Button color={getColorForType(types[id%5])}>{types[id%5]}</Button>;
    }

    const getUserForId=(id: number)=>{
        return newUsers[id%5].name;
    }
    const IconNames = ["administration", "bell", "ecosystem", "settings", "entities", "entitites2", "house2", "network" , "people", "privacy"];
    return (
        <Divnav>
            <Holdings>
              <Img src={`./media/office.jpg`}></Img>

              <Napis> 
                  <Logo> <img src={`./media/icons/${IconNames[6]}.svg`} height={90} /></Logo>
                    <Title>Corporate Holdings</Title> 
                    <Body>Workspace purpose and bit of context. This much needed decrpition is here to remind ppl where tey are, if they are new or have poor memory</Body>
              </Napis>
              </Holdings> <br/>
              <Button color="#707480" onClick={()=>setFilter("All")}>All</Button>

             <Button color="#ad79ab" onClick={()=>setFilter("POA")}>POA</Button>
             <Button color="#a86a6f" onClick={()=>setFilter("SAS")}>SAS</Button>
             <Button color="#607ea3" onClick={()=>setFilter("SARL")}>SARL</Button>
             <Button color="#edd38c" onClick={()=>setFilter("Communities")}>Communities</Button>
             <Button color="#67a669" onClick={()=>setFilter("SB")}>Secondary Business</Button>
             <Button color="#707480"  onClick={()=>setFollow("Leanne Graham")}>Followed</Button>
             <Button color="#707480"  onClick={()=>setFollow("")}>Not Followed</Button>

           Search title: <input type="text" onChange={(e)=>setWord(e.target.value)}></input>
        {filter==="All" &&
            <div>
            {posts.filter(e=> e.title.includes(word)).filter(e=> getUserForId(Number(e.userId)).includes(follow)).slice(page, page+10).map( (val: IPost )=> (
                <Wsp>
                 <Title>{val.title} </Title>
                <Body> {val.body}</Body>
                <Body>
                {getDivTypeForId(Number(val.id))}
                Updated By {getUserForId(Number(val.userId))}</Body>
                <br/><br/><br/>
            </Wsp>
            ))
            }
            </div>
        }
        {filter!=="All" &&
            <div>
            {posts.filter(e=> getTypeForId(Number(e.id))===filter).filter(e=> getUserForId(Number(e.userId)).includes(follow)).slice(page, page+10).map( (val: IPost )=> (
                <Wsp>
                    <Title>{val.title} </Title>
                    <Body> {val.body}</Body>

                    <Body>
                {getDivTypeForId(Number(val.id))}
                Updated By {getUserForId(Number(val.userId))}</Body>
                    <br/><br/><br/>
                </Wsp>
            ))
            }
            </div>
        }

        <Pagination count={10} page={page} onChange={(e, newpage)=>{setPage(newpage); console.log(page);}} />
        </Divnav>
    );
}