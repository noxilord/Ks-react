import axios, { AxiosResponse } from 'axios';
import React, {FC, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getUser, getUsers } from '../../actions/userActions';
import { formatDate } from '../../tools/dateFormat';
import {TiDelete} from 'react-icons/ti'
import {IUser} from '../../api-ifc/IUser'
import { IState } from '../../reducers';
import { Photo } from '../HomePage/Photo';
import {IUserReducer} from '../../reducers/userReducers';
import { addInfoExp, delInfoExp, getInfoExp } from '../../actions/profileActions';
import { ProfileReducer } from '../../reducers/ProfileReducer';
import { PanelReducer } from '../../reducers/PanelReducers';
import { IFee, IProposal, IReview } from '../../api-ifc/IPanel';
import { addCor, addFee, addProp, addReview, delCor, delFee, delProp, delReview, editHourly, editSP } from '../../actions/panelActions';
import {MdEdit} from 'react-icons/md'

const Content = styled.div`
    max-width: 1200px;
    align-items: center;

`;

const Divnav = styled.div`
font-size: 20px;
font-family: "Times New Roman";

padding: 15px;
margin-right:1%;
border-top: 1px solid grey;
border-bottom: 1px solid grey;
`;
const Table= styled.table`
margin-left: auto;
margin-right:auto;
width:95%;
`;
const Th = styled.th`
margin:5px;
padding:10px;
background-color: lightgrey;
`;
const Td = styled.td`
margin:5px;
padding:10px;
`;

const DelButton = styled.button`
background-color: #ffffff;
border: none;
color: red;
font-size: 20px;
`

const Edit = styled.div`
float: right;
`;
const File = styled.div`
font-size: 23px;
width: 100%;
text-align: left;

margin-left: 25px;
padding:5px;
`;
const BTN = styled.input`
font-size: 18px;
padding: 5px;
`;

const Title = styled.h3`
color: #295c8f;
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
`;
interface InfoParams{
    edit: boolean;
};

type addProp = ReturnType<typeof addProp>;
type delProp = ReturnType<typeof delProp>;

type addReview= ReturnType<typeof addReview>;
type delReview = ReturnType<typeof delReview>;

type addFee= ReturnType<typeof addFee>;
type delFee = ReturnType<typeof delFee>;

type addCor= ReturnType<typeof addCor>;
type delCor = ReturnType<typeof delCor>;

type editSP = ReturnType<typeof editSP>;
type editHourly = ReturnType<typeof editHourly>;

export const Panel: FC<InfoParams> = ({edit}:InfoParams) => {

    const dispatch = useDispatch();
       const rec  = useSelector<IState, PanelReducer> (state =>({
        ...state.panel}));

    //PROPOSALS MODIFIERS   
    const deleteProp =(val: IProposal) => {
        dispatch<delProp>(delProp(val));
    }
    const [propName, setPropName] = useState("");
    const [propEntity, setPropEntity] = useState("");
    const [propLocation, setPropLocation] = useState("");
    const [propExp, setPropExp] = useState("");
    const [propDate, setPropDate] = useState(new Date(2020,1,1));
    const [propFirm, setPropFirm] = useState("");

    const addProposal =(e: React.FormEvent) => {
        e.preventDefault();
       dispatch<addProp>(addProp({name:propName, entity:propEntity, location:propLocation, exp:propExp, date: propDate,firm:propFirm }));
    }

    //REVIEW MODIFIERS   
    const deleteReview =(val: IReview) => {
        dispatch<delReview>(delReview(val));
    }
    const [reviewName, setReviewName] = useState("");
    const [reviewEntity, setReviewEntity] = useState("");
    const [reviewLocation, setReviewLocation] = useState("");
    const [reviewExp, setReviewExp] = useState("");
    const [reviewDate, setReviewDate] = useState(new Date(2020,1,1));

    const addReviewForm =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addReview>(addReview({name:propName, entity:propEntity, location:propLocation, exp:propExp, date: propDate}));
    }

    //FEE MODIFIERS   
    const deleteFee =(val: IFee) => {
        dispatch<delFee>(delFee(val));
    }
    const [feeYear, setfeeYear] = useState("");
    const [feeCC, setfeeCC] = useState("");
    const [feeTotal, setfeeTotal] = useState("");
    const [feeLaw, setfeeLaw ] = useState("");

    const addFeeForm =(e: React.FormEvent) => {
        e.preventDefault();
        dispatch<addFee>(addFee({ year:feeYear, cc: feeCC, total: feeTotal, law: feeLaw }));
    }

    //CORRESPONDANTS
    const deleteCor =(val: string) => {
        dispatch<delCor>(delCor(val));
    }

    const [cor, setCor] = useState("");
    const addCorForm=(e: React.FormEvent)=>{
        e.preventDefault();
        dispatch<addCor>(addCor(cor));
    }

    //HOURLY MODIFIERS   
    const [newHourly, setHourly] = useState("");
    const editHourlyForm =(e: React.FormEvent) => {
        e.preventDefault();
       dispatch<editHourly>(editHourly(newHourly));
    }

    //SP MODIFIERS   
    const [newSP, setSP] = useState("");
    const editSPForm =(e: React.FormEvent) => {
        e.preventDefault();
       dispatch<editSP>(editSP(newSP));
    }
    const [editm, setEdit] = useState(false);
    const handleClick=()=>{
    setEdit(!editm);
    }
    const [file, setFile] = useState("Agreement.jpg");
    const prop = rec.proposals;
    const sp = rec.SP;
    const hourly = rec.hourly;
    const review = rec.reviews;
    const fee = rec.fees;


    return (

        <Divnav>
        <Edit>  <button onClick={handleClick}><MdEdit/></button> </Edit>
        <br/>
        <Title> Hourly fee</Title>
        <Body>{hourly}$/hour (Negociated)<br/>
      {editm===true&& 
              <form onSubmit={editHourlyForm}>
              <label>
              <input type="text" value={newHourly}  onChange={e => setHourly(e.target.value)}/>
              <input type="submit" value="Edit" />
              </label>
              <br/>
          </form>
      }</Body>

          <Title> Services and Projects</Title>
          <Body>
        {sp}<br/>
        {editm===true&& 
              <form onSubmit={editSPForm}>
              <label>
              <input type="text" value={newSP}  onChange={e => setSP(e.target.value)}/>
              <input type="submit" value="Edit" />
              </label>
              <br/>
          </form>
      }</Body>

        <Title> Terms and conditions</Title><Body>
       <File>
       {file}      <br/>       
       {editm===true&& <BTN type="file" id="img" name="img" accept="image/*" onChange={e=> setFile(e.target.value)}/>}
         <br/>
        </File> 
        </Body>


        <Title>Proposals</Title>
        <Body>
        <Table>
            <tr>
            <Th>Name</Th>
            <Th>Entity</Th>
            <Th>Expertise</Th>
            <Th>Firm</Th>
            <Th>Location</Th>
            <Th>Date</Th>

            {editm===true&&  <Th>Delete</Th>}
            </tr>
        {
            prop.map( (props: IProposal )=> (
                <tr>
                <Td>{props.name}</Td>
                <Td>{props.entity}</Td>
                <Td>{props.exp}</Td>
                <Td>{props.firm}</Td>
                <Td>{props.location}</Td>
                <Td>{formatDate(props.date)}</Td>
                {editm===true&& <Td><DelButton type='button' onClick={()=>deleteProp({name:props.name, entity:props.entity, location:props.location, exp:props.exp, date: props.date,firm:props.firm })}><TiDelete/></DelButton></Td>}
                </tr>

            ))
        }
               </Table>
               </Body>
        {editm===true&& 

            <form onSubmit={addProposal}>
            <label>
              Name:
              <input type="text" value={propName}  onChange={e => setPropName(e.target.value)}/>
            </label>
            <label>
              Entity:
              <input type="text" value={propEntity}  onChange={e => setPropEntity(e.target.value)}/>
            </label>
            <label>
              Experience:
              <input type="text" value={propExp}  onChange={e => setPropExp(e.target.value)}/>
            </label>
            <label>
              Firm:
              <input type="text" value={propFirm}  onChange={e => setPropFirm(e.target.value)}/>
            </label>
            <label>
              Location:
              <input type="text" value={propLocation}  onChange={e => setPropLocation(e.target.value)}/>
            </label>
            <label>
              Date:
              <input type="date" placeholder="yyyy-MM-dd" min="1997-01-01" max="2030-12-31" value={formatDate(propDate)}  onChange={e => setPropDate(new Date(e.target.value))}/>
            </label>
            <input type="submit" value="Add" />
          </form>
}
          <br/><br/><br/><br/>

          <Title>Reviews</Title>
          <Body>
        <Table>
            <tr>
            <Th>Name</Th>
            <Th>Entity</Th>
            <Th>Location</Th>
            <Th>Expertise</Th>
            <Th>Date</Th>
            {editm===true&& <Th>Delete</Th>}
            </tr>
        {
            review.map( (props: IReview )=> (
                <tr>
                <Td>{props.name}</Td>
                <Td>{props.entity}</Td>
                <Td>{props.location}</Td>
                <Td>{props.exp}</Td>
                <Td>{formatDate(props.date)}</Td>
                {editm===true&& <Td><DelButton type='button' onClick={()=>deleteReview({name:props.name, entity:props.entity, location:props.location, exp:props.exp, date: props.date })}><TiDelete/></DelButton></Td>}
                </tr>

            ))
        }
        </Table>
        {editm===true&& 
            <form onSubmit={addReviewForm}>
            <label>
              Name:
              <input type="text" value={reviewName}  onChange={e => setReviewName(e.target.value)}/>
            </label>
            <label>
              Entity:
              <input type="text" value={reviewEntity}  onChange={e => setReviewEntity(e.target.value)}/>
            </label>
            <label>
              Experience:
              <input type="text" value={reviewExp}  onChange={e => setReviewExp(e.target.value)}/>
            </label>
            <label>
              Location:
              <input type="text" value={reviewLocation}  onChange={e => setReviewLocation(e.target.value)}/>
            </label>
            <label>
              Date:
              <input type="date" placeholder="yyyy-MM-dd" min="1997-01-01" max="2030-12-31" value={formatDate(reviewDate)}  onChange={e => setReviewDate(new Date(e.target.value))}/>
            </label>
            <input type="submit" value="Add" />
          </form>
          }
          <br/><br/>
          </Body>
        <Title>Fees</Title>
        <Body>
        <Table>
            <tr>
            <Th>Year</Th>
            <Th>Cost Center</Th>
            <Th>Total amount</Th>
            <Th>Law Firm</Th>
            {editm===true&& <Th>Del</Th>}
            </tr>
        {
            fee.map( (props: IFee )=> (
                <tr>
                <Td>{props.year}</Td>
                <Td>{props.cc}</Td>
                <Td>{props.total}$</Td>
                <Td>{props.law}</Td>
                {editm===true&& <Td><DelButton type='button' onClick={()=>deleteFee({year:props.year, cc:props.cc, law:props.law, total:props.total })}><TiDelete/></DelButton></Td>}
                </tr>

            ))
        }
        </Table>
        {editm===true&& 
            <form onSubmit={addFeeForm}>
            <label>
              Year:
              <input type="text" value={feeYear}  onChange={e => setfeeYear(e.target.value)}/>
            </label>
            <label>
              Cost Center:
              <input type="text" value={feeCC}  onChange={e => setfeeCC(e.target.value)}/>
            </label>
            <label>
              Total amount:
              <input type="text" value={feeTotal}  onChange={e => setfeeTotal(e.target.value)}/>
            </label>
            <label>
              Law:
              <input type="text" value={feeLaw}  onChange={e => setfeeLaw(e.target.value)}/>
              </label>
            <input type="submit" value="Add" />
          </form>
          }
          </Body>

        </Divnav>
    );
}