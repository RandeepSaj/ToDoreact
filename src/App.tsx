import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Box/Home";
import SignUp from "./Box/SignUp";
import SignIn from "./Box/SignIn";
import Task from "./Box/Task";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Panel">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/task" element={<Task/>} />
          </Routes>  
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
