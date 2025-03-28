import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";
import Home from './views/Home';
import Chat from "./views/Chat";
import Config from "./views/Config";
import Profile from "./views/Profile";
import Login from "./views/Login";
import Register from "./views/Register";
import Logout from "./views/Logout";

function App() {
  return (
    <BrowserRouter basename="/sunnyspace/">
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/config" element={<Config />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;