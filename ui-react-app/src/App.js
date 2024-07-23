import logo from './logo.svg';
import './App.css';
// import HelloWorld from './Components/19-06-2024/HelloWorld';
import StatesEvents from './Components/19-06-2024/StatesEvents';
import Counter from './Components/19-06-2024/Counter'
import ListItems from './Components/20-06-2024/ListItems';
import InputHandler from './Components/20-06-2024/InputHandler';
import AddToList from './Components/20-06-2024/AddToList';
// import ComponentA from './Components/24-06-2024/ComponentA';
import CondationAlRendering from './Components/24-06-2024/CondationAlRendering';
import RectForgment from './Components/26-06-2024/RectForgment';
import UseEffectHook from './Components/17-07-2024/UseEffectHook';
import UseEffectApiCall from './Components/17-07-2024/UseEffectApiCall';
import React from 'react';
import Context1 from './Contexts/Context1';
import ApiSearchData from './Components/18-07-2024/ApiSearchData';
import ComponentA from './Components/19-07-2024/ComponentA';
import MemoHooks from './Components/22-07-2024/MemoHooks';
import { ContextApp1, ContextApp2 } from './Components/19-07-2024/ContextApp';
import Home from './Components/23-07-2024/Home';
import Countact from './Components/23-07-2024/Contact';
import About from './Components/23-07-2024/About';
import Prodcts from './Components/23-07-2024/Products';
// import {
//   createBrowserRouter, RouterProvider,
//   BrowserRouter
// } from "react-router-dom";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/countactus",
//     element: <Countact />,
//   },
//   {
//     path: "/Prodcts",
//     element: <Prodcts />,
//   },
// ]);

function App() {
  const empList = [{ name: 'Sam', age: 28, city: 'Hyderbad', id: 100 },
  { name: 'Ram', age: 24, city: 'Bangalore', id: 100 },
  { name: 'Siva', age: 25, city: 'Pune', id: 100 }]
  return (
    < >
      <ContextApp1.Provider value={empList}>
        <ContextApp2.Provider value={'Hello World'}>
          {/* 19-06-2024 */}
          {/* <HelloWorld /> */}
          {/* <StatesEvents /> */}
          {/* <Counter /> */}
          {/* <HelloWorld>
      </HelloWorld> */}

          {/* 20-06-2024 */}
          {/* <ListItems />
      <InputHandler />
      <AddToList /> */}

          {/* 24-06-2024 */}
          {/* <ComponentA />
      <CondationAlRendering /> */}
          {/* 26-06-2024 */}
          {/* <RectForgment name="Hello" >
        <div>
          <h3>Hello React js world, html, css, js, hyderbad</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </RectForgment> */}

          {/* 17-07-2024 */}

          {/* <UseEffectHook />
        <UseEffectApiCall /> */}

          {/* 18-07-2024 */}
          {/* <ApiSearchData /> */}

          {/* 19-07-2024 */}

          {/* <ComponentA /> */}

        </ContextApp2.Provider>
      </ContextApp1.Provider>

      {/* 22-07-2024 */}
      {/* <MemoHooks /> */}

      {/* 23-07-2024 */}
      <BrowserRouter>
        <div>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/About'}>About us</Link></li>
          <li><Link to={'/Contact'}>Contact us</Link></li>
          <li><Link to={'/Prodcts'}>Prodcts List</Link></li>
          {/* <Outlet /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Countact />} />
          <Route path="/Prodcts" element={<Prodcts />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
