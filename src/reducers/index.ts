import {combineReducers} from 'redux';

import users, {IUserReducer} from './userReducers'
import profile, {ProfileReducer} from './ProfileReducer'
import panel,{PanelReducer} from './PanelReducers';
import comment,{ ICommentReducer } from './commentsReducers';
import post,{ IPostReducer } from './postsReducers';
import photo,{ IPhotoReducer } from './photosReducers';

export default combineReducers({
    users,
    profile,
    panel,
    comment,
    post,
    photo
})

export interface IState
{
    users: IUserReducer;
    profile: ProfileReducer;
    panel: PanelReducer;
    comment: ICommentReducer;
    post: IPostReducer;
    photo: IPhotoReducer;
};
