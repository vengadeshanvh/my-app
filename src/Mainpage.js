// Mainpage.js

import React from 'react';
import Header from './Header';
import About from './About';
import Sidebar from './Sidebar';
import Timeline from './Timeline';
import Footer from './Footer';
import ChatWidget from './Chat';

function Mainpage() {
  return (
    <div className="main" style= {{ backgroundColor: 'rgba(215, 224, 241, 0.952)', minHeight: '100%' }}>
      <Header />
      <About />
      <Sidebar />
      <Timeline />
      <ChatWidget />
      <Footer />
      {/* Other components or content */}
    </div>
  );
}

export default Mainpage;
