import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Omah Catering "AMT". All Rights Reserved.</p>
      <p>Follow us on:</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/omahcatering_amt" width={328} />
      </div>
    </footer>
  );
}

export default Footer;