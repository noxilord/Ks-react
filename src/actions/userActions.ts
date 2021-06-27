import {Dispatch} from 'redux';
import * as actionTypes from './actionTypes/userTypes';
import {IUser} from '../api-ifc/IUser';

export const getUsers = () : Promise<IUser[]> => ((dispatch: Dispatch)=>{

    return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((usersList: IUser[]) =>{
                console.log(usersList);
                dispatch(
                    {
                        type: actionTypes.GET_USERS,
                        usersList
                    })
            })
    }) as any;

export const getUser = (id: string) : Promise<IUser> => ((dispatch: Dispatch)=>{

        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(response => response.json())
                .then((user: IUser) =>{
                    dispatch(
                        {
                            type: actionTypes.GET_USER,
                            user
                        })
                })
    }) as any;