/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>ヘッダー</div>,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>ボディ</div>,
    document.querySelector('#app')
  )
});
