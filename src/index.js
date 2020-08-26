import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, post: "Hi, how are you?", likeCounter: 15},
    {id: 2, post: "My first post", likeCounter: 20},
    {id: 3, post: "Hello World", likeCounter: 10},
    {id: 4, post: "Yo yo yo yo yo", likeCounter: 50}
]

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

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
