import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import NewPage from './components/projectPage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<GitProfile config={CONFIG} />}/>
        <Route path="/project" element={<NewPage config={CONFIG} />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
