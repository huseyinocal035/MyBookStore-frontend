import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Books from "./components/Book/Books";
import Home from "./components/Home/Home"

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="books" element={<Books/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
