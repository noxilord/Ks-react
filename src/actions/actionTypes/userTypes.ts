import {IUser} from '../../api-ifc/IUser';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';

export interface IUserTypes{
    GET_USERS:{
        usersList: IUser[],
    }
    GET_USER:{
        user: IUser,
    }
}