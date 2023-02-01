import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import Home from './pages/Home';

// const history = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
