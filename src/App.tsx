import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import Home from './views/Home';
import Chat from "./views/chat";
import Config from "./views/config";
import Profile from "./views/profile";

function App() {
  return (
    <BrowserRouter basename="/sunnyspace/">
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/config" element={<Config />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;