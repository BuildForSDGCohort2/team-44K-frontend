import React from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import './bootstrap.css';
import { HomepageUI} from './Pages';






const App = () => (
    <BrowserRouter>

        <HomepageUI />
    </BrowserRouter>

);

export default App;
