
import { BrowserRouter , Routes, Route } from "react-router-dom";

import LoginSignup from "./Pages/LoginSignup";

import MainComponent from './Components/Layout'

import Allstudents from './Components/AllStudent'
import AddStudent from './Components/Addstudent'

import Editstudent from './Components/Editstudent'



function App() {

  return (
     <>
        <Routes>
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/dashboard" element={<MainComponent />}>
        <Route path="allstudent">
          <Route index element={<Allstudents />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="editstudent/:id" element={<Editstudent />} />
        </Route>
      </Route>
        </Routes>
        </>
  );
}

export default App;
