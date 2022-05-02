import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Resume from "./Resume/Resume";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
