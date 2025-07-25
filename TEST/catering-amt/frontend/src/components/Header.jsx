import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Catering AMT</h1>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#galeri">Galeri</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;