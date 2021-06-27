import {IUser} from '../api-ifc/IUser';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUserReducer{
    userList: IUser[];
    user: IUser;
}

const defaultState = (): IUserReducer =>({
    userList: []
    ,user: {id:"", name:"", username:"", email:"", address:{street:"", suite:"", city:"", zipcode:"", geo:{lat:"", lng:""}}, phone:"", website:"", company:{name:"", catchPhrase:"", bs:""}}
})

export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_USERS:{
            const data: actionTypes.IUserTypes["GET_USERS"] = action;
            return{
                ...state,
                userList: data.usersList
                //usersList: [...state.userList, data.usersList]
            }
        }
        case actionTypes.GET_USER:{
            const data: actionTypes.IUserTypes["GET_USER"] = action;
            return{
                ...state,
                user: data.user
            }
        }
        default:{
            return state;
        }
    }
}