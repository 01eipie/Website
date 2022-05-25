import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Resume from "./views/Resume/Resume";

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
