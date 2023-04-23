import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AvatarAPI from "./components/AvatarAPI";
// import SetAvatar from "./components/SetAvatar"
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<AvatarAPI />} />
        <Route path="/" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}