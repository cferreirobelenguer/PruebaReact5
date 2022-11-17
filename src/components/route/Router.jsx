import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Superman from '../Superman'
import Batman from '../Batman'
import Daredevil from '../Daredevil'
import NavBar from "../NavBar";
import { Home } from "../Home";

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route exact path="/superman" element={<Superman/>}></Route>
            <Route exact path="/batman" element={<Batman/>}></Route>
            <Route exact path="/daredevil" element={<Daredevil/>}></Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}