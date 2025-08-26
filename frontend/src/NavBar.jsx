import React from 'react';

const NavBar = ({ currentPage, onPageChange }) => {
  return (
    <nav className="navbar">
      <button 
        className={`nav-button ${currentPage === 'chat' ? 'active' : ''}`}
        onClick={() => onPageChange('chat')}
      >
        Chat / Feedback
      </button>
      <button 
        className={`nav-button ${currentPage === 'stats' ? 'active' : ''}`}
        onClick={() => onPageChange('stats')}
      >
        Estatísticas
      </button>
    </nav>
  );
};

export default NavBar;
