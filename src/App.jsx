import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Navbar/Header";
import Homepage from "./pages/Homepage/Homepage";
import Headphones from "./pages/Headphones/Headphone";
import SpeakerHomepage from "./pages/Speakers/SpeakerHomepage";
import EarphoneHomepage from "./pages/Earphones/EarphoneHomepage";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<SpeakerHomepage />} />
          <Route path="/earphones" element={<EarphoneHomepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
