import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Books from "./components/Book/Books";
import Home from "./components/Home/Home";


export default function App() {
    return (
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="books" element={<Books/>}/>
            </Routes>
        </BrowserRouter>
    );
}