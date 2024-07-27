import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Service from "./pages/Service";

const App = () => {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="blog" element={<Blog/>}/>
      <Route path="pages" element={<Pages/>}/>
      <Route path="pricing" element={<Pricing/>}/>
      <Route path="service" element={<Service/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
