import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HOME from "./pages/home";
import LOGIN from "./pages/login";
import FEED from "./pages/feed";
import REGISTER from "./pages/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/login" element={<LOGIN/>}/>
        <Route path="/feed" element={<FEED/>}/>
        <Route path="/register" element={<REGISTER/>}/>
      </Routes>
    </Router>
  );
}

export default App;
