import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Feature from "./routes/feature/feature.component";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="feature/*" element={<Feature />} />
    </Routes>
  );
};

export default App;
