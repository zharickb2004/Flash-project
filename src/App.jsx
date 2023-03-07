import { Home } from "./assets/Components/Pages/Home/Home";
import "./App.css";
import {Routes,Route} from 'react-router-dom'
export function App() {
  return (
    <>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>  
      </div>
    </>
  );
}
