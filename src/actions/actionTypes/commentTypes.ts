import { IComment } from '../../api-ifc/IComment';


export const GET_COMMENTS = 'GET_COMMENTS';

export interface ICommentTypes{
    GET_COMMENTS:{
        commentList: IComment[],
    }
}