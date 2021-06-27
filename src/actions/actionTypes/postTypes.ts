import { IPost } from '../../api-ifc/IPost';


export const GET_POSTS = 'GET_POSTS';

export interface IPostTypes{
    GET_POSTS:{
        postList: IPost[],
    }
}