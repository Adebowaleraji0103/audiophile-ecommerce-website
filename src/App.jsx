import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Navbar/Header";
import Homepage from "./pages/Homepage/Homepage";
import Headphones from "./pages/Headphones/Headphone";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
