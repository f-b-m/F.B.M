/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Body from '../components/Body'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Header />,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Body />,
    document.querySelector('#app')
  )
});

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <div>Yu Fujiki & Taku SHimomura</div>,
//     document.querySelector('#footer')
//   )
// });
