/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function AdminHomePage() {
  const navigate= useNavigate();
  return (
    <div id="adminNavbar">
        <div id="logo">AMAZEPACK</div>
        <div id='frontpart'>
        <a id="adminProductButton" href="/admin">Products</a>
        <a id="adminOrderButton" href="/admin/orders">Orders</a>
        </div>
        <a id="logoutButton" onClick={() => {sessionStorage.removeItem('admin');navigate("/")}} >Logout</a>
    </div>
  )
}
