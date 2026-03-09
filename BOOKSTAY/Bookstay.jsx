import React, { useEffect, useState } from 'react';
import RoomSection from "../Components/RoomSection";
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
import tajLogo from "../assets/LOGO.png";
import { getAuth } from "firebase/auth";
import { app } from '../firebase';
import Header from '../Components/HEADER/Header';
const Bookstay = () => {
     
    return (
        <div>

           <Header/>
            <RoomSection/>

            <Footer/>
        </div>
    );
}

export default Bookstay;
