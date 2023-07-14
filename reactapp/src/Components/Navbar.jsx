/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
export default function Navbar(){
    const navigate = useNavigate();
    return(
        <div id="userNavbar">
            <div id="logo">AMAZEPACK</div>
            <div id="frontpart">
            <a id="productHomeButton" href="/home">Home</a>
            <a id="productCardButton" href="/cart">Cart</a>
            <a id="productOrderButton" href="/order">Orders</a>
            </div>
            <a id="logoutButton" onClick={() => {sessionStorage.removeItem('user');navigate("/")}} >Logout</a>
        </div>
    )
}