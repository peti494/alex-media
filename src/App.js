import './App.css';
import Home from './Pages/Home/Home'
import References from './Pages/References/References'
import ReferencesSingle from './Pages/References/ReferencesSingle'
import Contact from './Pages/Contact/Contact'
import Wedding from './Pages/References/Wedding';
import Portrait from './Pages/References/Portrait';
import Marketing from './Pages/References/Marketing';

import Navbar from "./Navbar.js"
import { Fragment, React } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Fragment>
			  <Router>
			  <Navbar/>
			  <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/references" element={<References />}/>
				<Route path="/references/:id" element={<ReferencesSingle />}/>
				<Route path="/contact" element={<Contact />}/>

				<Route path="/references/wedding" element={<Wedding />}/>
				<Route path="/references/marketing" element={<Marketing />}/>
				<Route path="/references/portrait" element={<Portrait />}/>
    		</Routes>
			  </Router>
		</Fragment>
    </>
  );
}

export default App;
