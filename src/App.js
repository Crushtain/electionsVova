import { Admin } from "./components/Admin";
import { Header } from "./components/Sections/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Sections/Home";
import "antd/dist/antd.css";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useEffect} from "react";
import {fetchUserData} from "./redux/slices/user";
import { Info } from "./components/Sections/Info";
import { Counter } from "./components/Sections/Counter";
import {Warning} from "./components/modal/modal-test";
import {Footer} from "./components/Sections/Footer";

function App() {
  const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(fetchUserData());
  }, []);
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
