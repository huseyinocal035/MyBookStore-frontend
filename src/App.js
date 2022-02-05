import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Book from "./components/Book/Book";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" exact element={ <Home/> } />
                    <Route path="/users/:userId" exact element={ <Book/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}