import {IPost} from '../api-ifc/IPost';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostReducer{
    postList: IPost[];
}

const defaultState = (): IPostReducer =>({
    postList: []
})

export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_POSTS:{
            const data: actionTypes.IPostTypes["GET_POSTS"] = action;
            console.log(action);
            return{
                ...state,
                postList: action.list
            }
        }
        default:{
            return state;
        }
    }
}