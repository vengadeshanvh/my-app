// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from './Start';
import Mainpage from './Mainpage';
import './App.css'; // Ensure your CSS imports are here if needed

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/mainpage" element={<Mainpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
