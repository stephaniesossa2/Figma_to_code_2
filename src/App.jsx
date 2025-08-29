import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Benefit1 from "./pages/Benefit1";
import Benefit2 from "./pages/Benefit2";
import HowItWork1 from "./pages/HowItWork1.jsx";
import HowItWork2 from "./pages/HowItWork2.jsx";
import SucessStories1 from "./pages/SucessStories1.jsx";
import SucessStories2 from "./pages/SucessStories2.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Pricing from "./pages/Pricing.jsx";
import CallToAction from "./pages/CallToAction.jsx";
import Footer from "./pages/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/benefit1" element={<Benefit1 />} />
        <Route path="/benefit2" element={<Benefit2 />} />
        <Route path="/howitwork1" element={<HowItWork1 />} />
        <Route path="/howitwork2" element={<HowItWork2 />} />
        <Route path="/sucessstories1" element={<SucessStories1 />} />
        <Route path="/sucessstories2" element={<SucessStories2 />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/calltoaction" element={<CallToAction />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;