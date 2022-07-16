import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SizeObserver from './utils/hooks/window-size-observer';


import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BrowserRouter>
 <SizeObserver>
  <App />
 </SizeObserver>
</BrowserRouter>)