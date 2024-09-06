import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../../src/App.css";
import Footer from "../components/Footer";
import Admin from "../components/Admin";



const Main = () => {


  return (
    
        <div>
        <Navbar />
        <div >  
        <Admin />
        </div>
       
       
    </div>
  
    )};

export default Main;