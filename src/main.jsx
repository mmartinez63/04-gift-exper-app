import { StrictMode } from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

// import App from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <GifExpertApp />
  </StrictMode>,

)
