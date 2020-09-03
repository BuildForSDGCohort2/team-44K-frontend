import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import './bootstrap.css';
import { Header} from './Pages';






const App = () => (
  <BrowserRouter>
    <Header />
    
  </BrowserRouter>
);

export default App;
