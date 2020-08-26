import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";
import Post from "./components/Profile/MyPost/Post/Post";

const App = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'}
    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yo:)"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    let posts = [
        {id: 1, post: "Hi, how are you?", likeCounter: 15},
        {id: 2, post: "My first post", likeCounter: 20},
        {id: 3, post: "Hello World", likeCounter: 10},
        {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
    ]

    let postsElements = posts.map( p => <Post message={p.post} like={p.likeCounter}/>);

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogsElements} messages={messagesElements} /> }/>
                    <Route path='/profile' render={ () => <Profile posts={postsElements} /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;