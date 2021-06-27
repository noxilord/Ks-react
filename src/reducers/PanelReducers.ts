import {IFee, IProposal, IReview} from '../api-ifc/IPanel';
import * as actionTypes from '../actions/actionTypes/panelTypes';
import { areTheSame, areTheSameFee, areTheSameReview } from './recudersHelpers';

export interface PanelReducer{
    hourly: string,
    SP: string,
    correspondants: string[],
    proposals: IProposal[],
    reviews: IReview[],
    fees: IFee[],
}

const defaultState = (): PanelReducer =>({
    hourly: "610",
    SP: "Corporate M&A and international acquisition",
    correspondants: ["FirtName LastName", "FirstName LastName"],
    proposals: [{name:"Operation Time", entity:"Renault", location:"France", date: new Date(2020, 1, 1), exp:"#tax", firm:"Racine"},
    {name:"Op Prmeth", entity:"Renault HQ", location:"USA", date: new Date(2020, 1, 1), exp:"#M&A", firm:"Clifford"},
    {name:"Operation Time", entity:"Renault BR", location:"Italia", date: new Date(2020, 1, 1), exp:"#social", firm:"SVZ"}],
    reviews: [{name:"Operation Time", entity:"Renault", location:"France", date: new Date(2020, 1, 1), exp:"#tax"},
    {name:"Op Prmeth", entity:"Renault HQ", location:"USA", date: new Date(2020, 1, 1), exp:"#M&A"},
    {name:"Operation Time", entity:"Renault BR", location:"Italia", date: new Date(2020, 1, 1), exp:"#social"}],
    fees: [{year:"2019", cc:"CS 153", total:"35000", law:"Clifford chance"},
    {year:"2018", cc:"CD 47", total:"95000", law:"Linklaters"},
    {year:"2017", cc:"CS 132", total:"10500", law:"Linklaters"}
],
})

export default(state = defaultState(), action: any) =>{

    switch(action.type)
    {
        case actionTypes.EDIT_HOURLY:{
            const data: actionTypes.PanelTypes["EDIT_HOURLY"] = action;
            return{
                ...state,
                hourly: action.item
            }
        }
        case actionTypes.EDIT_SP:{
            const data: actionTypes.PanelTypes["EDIT_SP"] = action;
            return{
                ...state,
                SP: action.item
            }
        }

        case actionTypes.ADD_CORRESPONDANT:{
            const data: actionTypes.PanelTypes["ADD_CORRESPONDANT"] = action;
            return{
                ...state,
                correspondants: [...state.correspondants, action.item]
            }
        }
        case actionTypes.DEL_CORRESPONDANT:{
            const data: actionTypes.PanelTypes["DEL_CORRESPONDANT"] = action;
            return{
                ...state,
                correspondants: state.correspondants.filter((item) => item!== action.item)
            }
        }

        
        case actionTypes.ADD_PROPOSAL:{
            const data: actionTypes.PanelTypes["ADD_PROPOSAL"] = action;
            return{
                ...state,
                proposals: [...state.proposals, action.item]
            }
        }
        case actionTypes.DEL_PROPOSAL:{
            const data: actionTypes.PanelTypes["DEL_PROPOSAL"] = action;
            return{
                ...state,
                proposals: state.proposals.filter((item) => !areTheSame(item, action.item))
            }
        }
        
        case actionTypes.ADD_FEE:{
            const data: actionTypes.PanelTypes["ADD_FEE"] = action;
            return{
                ...state,
                fees: [...state.fees, action.item]
            }
        }
        case actionTypes.DEL_FEE:{
            const data: actionTypes.PanelTypes["DEL_FEE"] = action;
            return{
                ...state,
                fees: state.fees.filter((item) => !areTheSameFee(item, action.item))
            }
        }
        
        case actionTypes.ADD_REVIEW:{
            const data: actionTypes.PanelTypes["ADD_REVIEW"] = action;
            return{
                ...state,
                reviews: [...state.reviews, action.item]
            }
        }
        case actionTypes.DEL_REVIEW:{
            const data: actionTypes.PanelTypes["DEL_REVIEW"] = action;
            return{
                ...state,
                reviews: state.reviews.filter((item) =>  !areTheSameReview(item, action.item))
            }
        }
        default:{
            return state;
        }
    }
}