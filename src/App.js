import { Admin } from "./components/Admin";
import { Header } from "./components/Sections/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Sections/Home";
import 'antd/dist/antd.css';
import { Info } from "./components/Sections/Info";
import { Counter } from "./components/Sections/Counter";
import {Warning} from "./components/modal";
import {Footer} from "./components/Sections/Footer";

function App() {
    return (
        <div className="main">
            <Header/>
            <Counter/>
            <Info/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/admin' element={<Admin/>}/>
            </Routes>
            <Footer/>
            <Warning/>
        </div>
    );


}

export default App;
