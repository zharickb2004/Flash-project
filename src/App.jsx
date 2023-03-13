import { Home } from "./assets/Components/Pages/Home/Home";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import { ContactUs } from "./assets/Components/Pages/ContactUs/ContactUs";
import { Header } from "./assets/Components/Layouts/Header/Header";
import { Login } from "./assets/Components/Pages/Login/Login";
export function App() {
  return (
    <>
      <div className="container">
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path='/Login' element={<Login/>}/>
        </Routes>  
      </div>
    </>
  );
}
