import './App.css';
import './styles/style.css';
import Home from './components/home';
import { Box, styled } from '@mui/material';
import Landing from './components/landing';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login';
import SignUp from './components/signup';
import About from './components/Learn/about';
import Eula from './components/Learn/eula';
import Contact from './components/Contacting/contact';
import Feedback from './components/Contacting/feedback';
import Report from './components/Contacting/report';
import Suggest from './components/Contacting/suggest';
import Write from './components/Contacting/write';


function App() {
  return (
    <>
      <BlackBox>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/Generate" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/eula' element={<Eula />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/report' element={<Report />} />
          <Route path='/suggest' element={<Suggest />} />
          <Route path='/write' element={<Write />} />
        </Routes>
      </BlackBox>
    </>

  );
}

export default App;


const BlackBox = styled(Box)`
  background-color: rgb(4, 4, 30);
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`
