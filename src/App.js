import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './component/Home/Navbar/Navbar';
import Home from './component/Home/Home';
import News from './component/News/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/News" element={<News></News>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
