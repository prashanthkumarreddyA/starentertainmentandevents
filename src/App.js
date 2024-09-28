import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Componets/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Page from './Componets/Page';
import Homepage from './Componets/Homepage';
import Projects from './Componets/Projects';
import CardPage from './Componets/CardPage';
import Contactus from './Componets/Contactus';
import Work from './Componets/Work';
import WhosTalking from './Componets/WhosTalking';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route>
      <Route index element={<Homepage />} />
      <Route path ="/navbar" element={<Navbar />} />
      <Route path ="/page" element={<Page />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/card' element={<CardPage />} />
      <Route path='/contact' element={<Contactus />} />
      <Route path='/work' element={<Work />} />
      <Route path="/whos-talking" element={<WhosTalking />} />
    </Route>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
