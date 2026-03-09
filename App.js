import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { Route, Routes, Link, Router } from "react-router-dom";
import Hotel from "./Components/Hotel";
import Dining1 from "./Components/Dining1";
import Offers1 from "./Components/Offers1";
import RoomSection from "./Components/RoomSection";
import BookNow from "./Components/BookNow";
import RoomGuestSelector from "./Components/RoomGuestSelector";
import PlanYourStay from "./Components/PlanYourStay";
import Resrvation from "./Components/Resrvation/Resrvation";
import Destination from "./Components/Destination/Destination";
import ScrollToTop from "./Components/ScrollToTop";
import MyAccount from "./Components/HEADER/MyAccount";
import ConfermPayment from "./Components/ConfermPayment";
import Bookstay from "./BOOKSTAY/Bookstay";
import SearchBox from "./SearchBox/SearchBox";
import Searchresult from "./SearchBox/Searchresult";
import Header from "./Components/HEADER/Header";

function App() {
  return (
    <div className="App">
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Dining1" element={<Dining1 />} />
        <Route path="/Offers1" element={<Offers1 />} />
        <Route path="/BookNow" element={<PlanYourStay/>}/>
        <Route path="/reservation" element={<Resrvation/>}/>
        <Route path="/myaccount" element={<MyAccount/>}/>
        <Route path="/ConfermPayment" element={<ConfermPayment/>}/>
        <Route path="/BookStay" element={<Bookstay/>}/>
        <Route path="/rooms/:location" element={<Searchresult />} />
         <Route path="/myaccount" element={<MyAccount />} />
       
      </Routes>
    </div>
  );
}

export default App;
