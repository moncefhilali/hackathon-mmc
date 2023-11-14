import HomeComp from './Component/Home/HomeComp'
import EventComp from './Component/Event/EventComp'
import Speakers from './Pages/Speakers.JSX'
import Contact from "./Pages/Contact"
import AboutusComp from "./Component/Aboutus/AboutusComp"
import EventDetails from './Component/Event/EventDetails'
import Eventinfo from './Component/Event/EventInfo'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeComp />} />
      <Route path="/events" element={<EventComp/>} >
        <Route path="/events" element={<Eventinfo/>}></Route>
        <Route path="/events/Details" element={<EventDetails/>}></Route>
      </Route>
        <Route path="/speakers" element={<Speakers></Speakers>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/aboutus" element={<AboutusComp></AboutusComp>} />
    </Routes>
  </Router>
  )
}

export default App
