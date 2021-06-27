import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import {HomePage} from './HomePage/HomePage';
import {TopNav} from './TopNav/TopNav';
import {LeftMenu} from './LeftMenu/LeftMenu';
import {Post} from './Post';
import {Posts} from './Posts';
import {People} from './People';
import {Person} from './Profile/Person';
import {Entities} from './Entities/Enitities';
import {Comment} from './Comments';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions/commentActions';
import { IState } from '../reducers';
import { ICommentReducer } from '../reducers/commentsReducers';
import { getPosts } from '../actions/postActions';
import { IPostReducer } from '../reducers/postsReducers';
import { getUser, getUsers } from '../actions/userActions';
import { IUserReducer } from '../reducers/userReducers';
import { Workspace } from './Workspace/Workspace';

  const GlobalStyle = createGlobalStyle`
    body {
      background-color: #D7dce5;

    }
  `


  type GetComments = ReturnType<typeof getComments>;
  type GetPosts = ReturnType<typeof getPosts>;
  type GetUsers= ReturnType<typeof getUsers>;
export const App =()=>{

  const dispatch  = useDispatch();
  useEffect(() => { dispatch<GetComments>(getComments());}, []);
  const res  = useSelector<IState, ICommentReducer> (state =>({...state.comment}));

  useEffect(() => { dispatch<GetPosts>(getPosts());}, []);
  const pos  = useSelector<IState, IPostReducer> (state =>({...state.post}));

  useEffect(() => {  dispatch<GetUsers>(getUsers());}, []);
  const usr  = useSelector<IState, IUserReducer> (state =>({...state.users}));


return (
    <Router>
    <div>
        <Reset />
        <TopNav/>
        <LeftMenu/>
        <Route exact path='/'render={(props) => (
        <HomePage {...props} comments={res.commentList} posts={pos.postList}/>)}
        ></Route>
        <Route exact path='/workspaces'render={(props) => (
        <Workspace {...props} users={usr.userList} posts={pos.postList}/>)}
        ></Route>
        <Route path='/publications' component={Posts}/>
        <Route path='/post/:id' component={Post}/>
        <Route path='/people' component={People}/>
        <Route exact path='/person/:id' render={(props) => (
        <Person {...props} users={usr.userList}/>)}
        ></Route>
        <Route path='/entities' component={Entities}/>
        <Route path='/comment/:id' component={Comment}/>
        <GlobalStyle/>
    </div>
    </Router>
)
}


