
import { useState } from "react"
import "./todo.css"
import { Link, Outlet } from "react-router-dom"




function App() {

  return (
    <>
      <header className="header">
        <Link to="/">Trang chủ</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/admin">Quản lý công việc</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/admin">Quản lý công việc</Link>
      </header>
      <h1>Đây là trang quản lý công việc</h1>
      <Outlet />
    </>
  )
}

export default App
