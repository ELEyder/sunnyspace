import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';

function App() {
  return (
    <Router basename="/sunnyspace">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;