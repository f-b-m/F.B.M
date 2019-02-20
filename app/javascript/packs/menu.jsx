/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Header />,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>ボディ</div>,
    document.querySelector('#app')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>フッター</div>,
    document.querySelector('#footer')
  )
});
