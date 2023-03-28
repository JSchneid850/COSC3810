import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./pages/Footer";
import Cosc2100 from "./pages/Cosc2100";
import Cosc3810 from "./pages/Cosc3810";
import Cosc4920 from "./pages/Cosc4920";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Cosc2100" element={<Cosc2100 />} />
          <Route path="Cosc3810" element={<Cosc3810 />} />
          <Route path="Cosc4920" element={<Cosc4920 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);