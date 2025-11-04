import { Route, Routes, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Navbar/Header";
import Homepage from "./pages/Homepage/Homepage";
import Headphones from "./pages/Headphones/Headphone";
import SpeakerHomepage from "./pages/Speakers/SpeakerHomepage";
import EarphoneHomepage from "./pages/Earphones/EarphoneHomepage";
import ProductDetails from "./pages/Product Details/ProductDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/speakers" element={<SpeakerHomepage />} />
          <Route path="/earphones" element={<EarphoneHomepage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route path="/product/:id" element={<Product />} /> */}

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
