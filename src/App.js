import React from 'react';

import PageMenu from './components/page-menu/page-menu.component'
import Header from './components/header/header.component'
import Content from './components/content/content.component'

import './App.css'
import './App.scss'

const App = () => (
  <div className="App">
    <div className="container">
      <PageMenu />
      <div className="page">
        <Header />
        <Content />
      </div>
    </div>
  </div>
)

export default App
