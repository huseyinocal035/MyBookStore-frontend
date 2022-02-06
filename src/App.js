import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Sidebar></Sidebar>
            <Outlet />
        </div>
    );
}