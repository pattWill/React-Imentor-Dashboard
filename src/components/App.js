import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import Products from './Products';
import Users from './Users';
import {Link, Route, Routes, Router, Switch, } from 'react-router-dom'
import Categories from './Categories';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
        <SideBar />
          <Routes>
          <Route exact path="/" element={<ContentWrapper/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/categories" element={<Categories/>}/>
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
