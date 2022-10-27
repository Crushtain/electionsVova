import { useSelector } from "react-redux";
import { Admin } from "./components/Admin";
import { Header } from "./components/Sections/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Sections/Home";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useEffect} from "react";
import { fetchUserData, selectIsAuth } from "./redux/slices/user";
import "antd/dist/antd.css";

function App() {
  const dispatch = useAppDispatch();

   useEffect(() => {
    dispatch(fetchUserData());
  }, []);

   const isAuthUser = useSelector(selectIsAuth);

   const logIn = () => {
       console.log("Авторизоваться хочешь, Мразь???")
   }
    const logOut = () => {
        console.log("Выйти хочешь, Мразь???")
    }



    return (
        <div className="main">
            <Header isAuthUser={isAuthUser} logIn={logIn} logOut={logOut} />
            <Routes>
                <Route path='/' element={<Home isAuthUser={isAuthUser} />} />
                <Route path='/admin' element={<Admin/>} />
            </Routes>
        </div>
    );
}

export default App;
