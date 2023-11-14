import HomeComp from './Component/Home/HomeComp'
import EventComp from './Component/Event/EventComp'
import Speakers from './Pages/Speakers.JSX'
import Contact from "./Pages/Contact"
import AboutusComp from "./Component/Aboutus/AboutusComp"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/events" element={<EventComp/>} />
        <Route path="/speakers" element={<Speakers></Speakers>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/aboutus" element={<AboutusComp></AboutusComp>} />
    </Routes>
  </Router>
  )
}

export default App
