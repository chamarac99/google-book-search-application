import './App.css';
import { Route,Routes } from 'react-router-dom'; 
import Home from './components/home/Home'; 
import About from './components/about/About';
import BookDetails from './components/home/bookDetails/BookDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/about" element ={<About/>}/>
      <Route path ="/book/:id" element ={<BookDetails/>}/>
    </Routes>
  );
}

export default App;
