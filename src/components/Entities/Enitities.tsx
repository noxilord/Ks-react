import {entity, enitiesData}  from '../../data/enitities'
import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { formatDate } from '../../tools/dateFormat';
import {TiDelete} from 'react-icons/ti'
const Divnav = styled.div`
    font-size: 30px;
    font-family: "Times New Roman";
    backgroud: black;
    text-align: center;
    padding: 15px;
    width: 77%;
    float: right;
    margin-right:1%;
    margin-left: auto;
    margin-right: auto;
`;

const Ent = styled.div<{view: boolean}>`
    background-color: white;
    font-size: 20px;
    width: ${props => props.view === false ? "90%" :"200px" };
    height: ${props => props.view === false ?"110px" :"200px" };
    border: 1px solid grey;
    padding: 10px;
    margin: 10px;
    float: left;
    border-radius: 10px;
    ${props => props.view === false ?"margin-left: auto":""};
    ${props => props.view === false ?"margin-right: auto":""};

`;

const Img = styled.img<{view: boolean}>`
    display:${props => props.view === false ?"block" :"inline"};
    margin-left: auto;
    margin-right: auto;
    ${props => props.view === false ?"float: left":""};
`;

const Data = styled.div`
    display: inline;
    padding: 2px;
`;

const Status = styled.div`
    display: inline;
    padding: 2px;
`;

const Place = styled.div`
    color: blue;
    padding: 2px;
`;
const Company = styled.div`
    
    padding: 2px;
`;
const DelButton = styled.button`
background-color: #ffffff;
border: none;
color: red;
font-size: 20px;
`
interface filters{
    what: string; //date OR company OR status OR place
    form: string; //IN DATE: newer OR older || IN REST: contains OR is
    by: string; //value -> date or string
}
export const Entities: FC = () =>{
    const [enitiesTab, setEntitiesTab] = useState(enitiesData);
    const [filterTab, setFilterTab] = useState<filters[]>([])
    const[filterValue, setFilterValue] = useState("");
    const[dateValue, setDateValue] = useState(new Date());
    const [selected, setSelected] = useState("Company");
    const [sort, setSort] = useState("Company");
    const [dateSelected, setDateSelected] = useState("Older");
    const [typeSelected, setTypeSelected] = useState("Contains");
    const [view, setView] = useState(true);

    const handleAddFilter=(e: React.FormEvent) => {
        e.preventDefault();
        console.log(selected);
        const newTab = filterTab;
        if(selected=="Date"){
            newTab.push({by:dateValue.toString(), form:dateSelected, what:selected});
        }
        else{
            newTab.push({by:filterValue, form: typeSelected, what:selected});
        }
        setFilterTab(newTab);
        console.log(newTab);
        updateEntities();
    }

    const delFilter=(val: string)=>{
        const newTab = filterTab.filter(e=> e.by!=val);
        let newEntities = enitiesData;
        newTab.forEach(f=> newEntities = newEntities.filter(e=> isFiltered(e, f)));
        setEntitiesTab(newEntities);
        setFilterTab(newTab);
    }
    const isFiltered=(entity :entity, filter: filters)=>{
        if(filter.what=="Date"){
            const d = new Date(filter.by);
            if(filter.form=="newer"){
                return entity.endData > d;
            }
            else{
                return entity.endData < d;
            }
        }
        else{
            switch(filter.what){
                case "Company":
                    if(filter.form=="Is"){
                        return entity.company === filter.by;
                    }
                    else{
                        return entity.company.includes(filter.by);
                    }
                    break;
                case "Status":
                    if(filter.form=="Is"){
                        return entity.status === filter.by;
                    }
                    else{
                        return entity.status.includes(filter.by);
                    }
                    break;

                case "Place":
                    if(filter.form=="Is"){
                        return entity.place === filter.by;
                    }
                    else{
                        return entity.place.includes(filter.by);
                    }
                    break;
            }
        }
    }
    const updateEntities=()=>{
        let newEntities = enitiesData;
        filterTab.forEach(f=> newEntities = newEntities.filter(e=> isFiltered(e, f)));
        setEntitiesTab(newEntities);
    }
    const sortComp=(a: entity, b: entity)=>{
        if(a.company < b.company){
            return -1;
        }
        else return 1;
    }
    const sortDate=(a: entity, b: entity)=>{
        if(a.endData < b.endData){
            return -1;
        }
        else return 1;
    }
    const sortStatus=(a: entity, b: entity)=>{
        if(a.status < b.status){
            return -1;
        }
        else return 1;
    }
    const sortPlace=(a: entity, b: entity)=>{
        if(a.place < b.place){
            return -1;
        }
        else return 1;
    }
   const sortEntities=(a: entity, b: entity):number=>{
    switch(sort){
        case"Company":
            return  sortComp(a,b);
            break;
        case"Date":
            return  sortDate(a,b);
            break;
        case"Place":
            return  sortPlace(a,b);
            break;
        case"Status":
            return  sortStatus(a,b);
            break;

    }
    
    return -1;
   }

    return (<Divnav>
        <button onClick={()=>setView(!view)}>Change view</button>
         <form>
             Sort By:
                <select value={sort} onChange={e=>setSort(e.target.value)}> //set value here
                        <option value="Company">Company</option>
                        <option value="Status">Status</option>
                        <option value="Place">Place</option>
                        <option value="Date">Date</option>
                    </select>
        </form> 
              <form onSubmit={handleAddFilter}>
                  Add filter:
                        <select value={selected} onChange={e=>setSelected(e.target.value)}> //set value here
                        <option value="Company">Company</option>
                        <option value="Status">Status</option>
                        <option value="Place">Place</option>
                        <option value="Date">Date</option>
                    </select>
                    {selected=="Date"&&
                    <div>
                    <select value={dateSelected} onChange={e=>setDateSelected(e.target.value)}> //set value here
                        <option value="Older">Older Then</option>
                        <option value="Newer">Newer Then</option>
                    </select>
                    <input type="date" placeholder="yyyy-MM-dd" value={formatDate(dateValue)}  onChange={e => setDateValue(new Date(e.target.value))}/>
                    </div>
                    }
                    {selected!="Date"&&
                    <div>
                        <select value={typeSelected} onChange={e=>setTypeSelected(e.target.value)}> //set value here
                        <option value="Contains">Contains</option>
                        <option value="Is">Is</option>
                    </select>
                    <input type="text" value={filterValue}  onChange={e => setFilterValue(e.target.value)}/>
                    </div>
                    }
                
              <input type="submit" value="Dodaj" />
            </form>


        {filterTab.map((val: filters)=>(
            <div>
                {val.what}
                {val.form}
                {val.what==="Date"&&
                    formatDate(new Date(val.by))
                }
                {val.what!="Date"&&
                    val.by
                }

                <DelButton type='button' onClick={()=>delFilter(val.by)}> <TiDelete/></DelButton>

            </div>))
        }


       { enitiesTab.sort(sortEntities).map( (val: entity )=> (
          <Ent view={view}> 
              <Img  view={view} src={`./logos/logo${enitiesTab.indexOf(val)%3 + 1}.png`} width={100} height={100}></Img> 
        <Company> {val.company}</Company>
      <Place>{val.place} </Place>  
        <Data>{formatDate(val.endData)}  </Data> 
          
        <Status> {val.status} <br/><br/></Status> 
          </Ent>
       ))
    }

    </Divnav>);
}