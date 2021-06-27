import { IPhoto } from '../../api-ifc/IPhoto';


export const GET_PHOTOS = 'GET_PHOTOS';

export interface IPhotoTypes{
    GET_PHOTOS:{
        photoList: IPhoto[],
    }
}