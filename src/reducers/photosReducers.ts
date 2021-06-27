import {IUser} from '../api-ifc/IUser';
import * as actionTypes from '../actions/actionTypes/photoTypes';
import { IPhoto } from '../api-ifc/IPhoto';

export interface IPhotoReducer{
    photoList: IPhoto[];
}

const defaultState = (): IPhotoReducer =>({
    photoList: []
})

export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_PHOTOS:{
            const data: actionTypes.IPhotoTypes["GET_PHOTOS"] = action;
            console.log(action);
            return{
                ...state,
                photoList: action.list
            }
        }
        default:{
            return state;
        }
    }
}