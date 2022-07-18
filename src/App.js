import logo from './logo.svg';
import './App.css';
import Navbar from './component/Home/Navbar/Navbar';
import Banner from './component/Home/Banner/Banner';
import LawSections from './component/Home/LawSections/LawSections';
import Blog from './component/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <LawSections></LawSections>
      <Blog></Blog>
    </div>
  );
}

export default App;
