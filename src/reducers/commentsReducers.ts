import {IUser} from '../api-ifc/IUser';
import * as actionTypes from '../actions/actionTypes/commentTypes';
import { IComment } from '../api-ifc/IComment';

export interface ICommentReducer{
    commentList: IComment[];
}

const defaultState = (): ICommentReducer =>({
    commentList: []
})

export default (state = defaultState(), action: any) =>{
    switch(action.type){
        case actionTypes.GET_COMMENTS:{
            const data: actionTypes.ICommentTypes["GET_COMMENTS"] = action;
            console.log(action);
            return{
                ...state,
                commentList: action.list
            }
        }
        default:{
            return state;
        }
    }
}