import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/photoTypes';
import { IPhoto } from '../api-ifc/IPhoto';

export const getPhotos = () : Promise<[IPhoto]> => ((dispatch: Dispatch)=>{

    return fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
            .then((list: IPhoto[]) =>{
                console.log(list);
                dispatch(
                    {
                        type: actionTypes.GET_PHOTOS,
                        list
                    })
            })
    }) as any;
