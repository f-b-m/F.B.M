/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import DrillDetail from '../components/DrillDetail'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Header />,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <DrillDetail />,
    document.querySelector('#app')
  )
});

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <div>Yu Fujiki & Taku SHimomura</div>,
//     document.querySelector('#footer')
//   )
// });
