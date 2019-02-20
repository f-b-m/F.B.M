/* eslint no-console:0 */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import GridLayout from '../components/GridLayout'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Header />,
    document.querySelector('#header')
  )
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <GridLayout />,
    document.querySelector('#app')
  )
});

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <div>Yu Fujiki & Taku SHimomura</div>,
//     document.querySelector('#footer')
//   )
// });
