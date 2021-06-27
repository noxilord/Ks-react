import {Dispatch} from 'redux';
import { IFee, IProposal, IReview } from '../api-ifc/IPanel';
import * as actionTypes from './actionTypes/panelTypes';

export const editHourly = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
{
type: actionTypes.EDIT_HOURLY,
item
})
}) as any;

export const editSP = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
{
type: actionTypes.EDIT_SP,
item
})
}) as any;

export const delCor = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
{
type: actionTypes.DEL_CORRESPONDANT,
item
})
}) as any;

export const addCor = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
{
type: actionTypes.ADD_CORRESPONDANT,
item
})
}) as any;  

export const delProp = (item: IProposal) :  IProposal[] => ((dispatch: Dispatch)=>{
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA");
return dispatch(
{
    type: actionTypes.DEL_PROPOSAL,
    item
})
}) as any;

export const addProp = (item: IProposal) :  IProposal[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.ADD_PROPOSAL,
        item
    })
}) as any;  

export const delFee = (item: IFee) :  IFee[] => ((dispatch: Dispatch)=>{
    return dispatch(
    {
        type: actionTypes.DEL_FEE,
        item
    })
    }) as any;
    
    export const addFee = (item: IFee) :  IFee[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.ADD_FEE,
            item
        })
    }) as any;  
    
export const delReview = (item: IReview) :  IReview[] => ((dispatch: Dispatch)=>{
    return dispatch(
    {
        type: actionTypes.DEL_REVIEW,
        item
    })
    }) as any;
    
    export const addReview = (item: IReview) :  IReview[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.ADD_REVIEW,
            item
        })
    }) as any;  
        