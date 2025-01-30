import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';
import Chat from "./views/chat";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter basename="/sunnyspace/">
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;