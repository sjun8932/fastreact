import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './App'
import reportWebVitals from './reportWebVitals';

const information = {
    title: '게시글 제목입니다.',
    content: '게시글 내용입니다. 반갑습니다.',
    user: {
        name: '곽민선님',
        ImgUrl: 'https://w.namu.la/s/dfa30564fb91f6b91c21419685e4c786d72dbe1e0af5f7cbaa0c712e548251a53cf19e909ac88ad424c9f4ac1d518012c4c4fcf60be649d1580443fb722fb886df56f07151f0e8e922423b38f72331fbc7eea7a6793539b1362e378eb722f775d4851463a070491e4fd12927ea8357c1'
    }
}

ReactDOM.render(
    <Board
        title={information.title}
        content={information.content}
        user={information.user}
    />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
