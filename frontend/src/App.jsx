import React, { useState } from 'react';
import NavBar from './NavBar';
import Chat from './pages/Chat';
import Stats from './pages/Stats';

function App() {
  const [currentPage, setCurrentPage] = useState('chat');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavBar currentPage={currentPage} onPageChange={handlePageChange} />
      
      <div className="main-content">
        {currentPage === 'chat' && <Chat />}
        {currentPage === 'stats' && <Stats />}
      </div>
    </div>
  );
}

export default App;
