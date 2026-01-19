import "./App.css"
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
