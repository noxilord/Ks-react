import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/postTypes';
import { IPost } from '../api-ifc/IPost';

export const getPosts = () : Promise<[IPost]> => ((dispatch: Dispatch)=>{

    return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then((list: IPost[]) =>{
                console.log(list);
                dispatch(
                    {
                        type: actionTypes.GET_POSTS,
                        list
                    })
            })
    }) as any;
