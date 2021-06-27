import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/commentTypes';
import { IComment } from '../api-ifc/IComment';

export const getComments = () : Promise<[IComment]> => ((dispatch: Dispatch)=>{

    return fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then((list: IComment[]) =>{
                console.log(list);
                dispatch(
                    {
                        type: actionTypes.GET_COMMENTS,
                        list
                    })
            })
    }) as any;
