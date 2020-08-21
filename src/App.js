import React from 'react';
import './App.css';

const App = () => {
    return (<div className='app-wrapper'>
        <header className='header'>
            <img src='https://73.img.avito.st/432x324/5252064473.jpg'/>
        </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
                <img src='https://i.ytimg.com/vi/kdWwvE3wFaE/maxresdefault_live.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default App;
