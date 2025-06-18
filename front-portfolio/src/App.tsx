import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import WorkDetail from "./pages/WorkDetail";

function App() {
  return(
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/:id" element={<WorkDetail />} />
      </Routes>
    </Router>
  );
}

export default App;