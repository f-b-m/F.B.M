/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Card from '../components/Card'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Header />,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Card />,
    document.querySelector('#app')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>フッター</div>,
    document.querySelector('#footer')
  )
});
