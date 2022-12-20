import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HOME from "./pages/home";
import LOGIN from "./pages/login";
import FEED from "./pages/feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/login" element={<LOGIN/>}/>
        <Route path="/feed" element={<FEED/>}/>
      </Routes>
    </Router>
  );
}

export default App;
