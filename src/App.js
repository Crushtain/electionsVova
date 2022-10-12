import {Header} from "./components/Sections/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/Sections/Home";
import 'antd/dist/antd.css';

function App() {
    return (
        <div className="main">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
    );


}

export default App;
