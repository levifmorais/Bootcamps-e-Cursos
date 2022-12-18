import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HOME from "./pages/home";
import LOGIN from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HOME/>}/>
        <Route path="/login" element={<LOGIN/>}/>
      </Routes>
    </Router>
  );
}

export default App;
