import React from 'react';

const NavBar = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navbar">
      <button 
        className={`nav-button ${currentPage === 'chat' ? 'active' : ''}`}
        onClick={() => onPageChange('chat')}
      >
        <span role="img" aria-label="chat">💬</span>
        Chat / Feedback
      </button>
      <button 
        className={`nav-button ${currentPage === 'stats' ? 'active' : ''}`}
        onClick={() => onPageChange('stats')}
      >
        <span role="img" aria-label="stats">📊</span>
        Estatísticas
      </button>
    </nav>
  );
};

export default NavBar;
