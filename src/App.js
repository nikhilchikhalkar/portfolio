import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="dark:bg-black dark:text-white h-screen">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
