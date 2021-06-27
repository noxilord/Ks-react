import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/profileTypes';

export const getInfoExp = () :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.GET_INFO_EXP
    })
}) as any;


export const addInfoExp = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.ADD_INFO_EXP,
        item
    })
}) as any;

export const delInfoExp = (item: string) :  string[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.DEL_INFO_EXP,
            item
        })
    }) as any;


export const getInfoSpec = () :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.GET_INFO_SPEC
    })
}) as any;


export const addInfoSpec = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.ADD_INFO_SPEC,
        item
    })
}) as any;

export const delInfoSpec = (item: string) :  string[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.DEL_INFO_SPEC,
            item
        })
    }) as any;


export const getInfoAdm = () :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.GET_INFO_ADM
    })
}) as any;


export const addInfoAdm = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.ADD_INFO_ADM,
        item
    })
}) as any;

export const delInfoAdm= (item: string) :  string[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.DEL_INFO_ADM,
            item
        })
    }) as any;

export const getInfoCou = () :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.GET_INFO_COU
    })
}) as any;


export const addInfoCou = (item: string) :  string[] => ((dispatch: Dispatch)=>{
return dispatch(
    {
        type: actionTypes.ADD_INFO_COU,
        item
    })
}) as any;

export const delInfoCou = (item: string) :  string[] => ((dispatch: Dispatch)=>{
    return dispatch(
        {
            type: actionTypes.DEL_INFO_COU,
            item
        })
    }) as any;
