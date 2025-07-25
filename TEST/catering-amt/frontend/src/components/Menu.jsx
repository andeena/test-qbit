import { Link } from 'react-router-dom';

function Menu() {
  return (
    <section id="menu" className="container section">
      <h2 className="section-title">Menu Andalan Kami</h2>
      <div className="menu-grid">
        <Link to="/paket/tumpeng" className="menu-card-link">
            <div className="menu-card">
                <div className="card-image-container">
                    <img src="https://img.inews.co.id/media/1200/files/inews_new/2020/08/31/nasi_tumpeng.jpg" alt="Nasi Tumpeng" />
                </div>
                <div className="card-content">
                    <h3>Paket Nasi Tumpeng</h3>
                    <p>Lengkap dengan lauk pauk tradisional, cocok untuk syukuran dan perayaan.</p>
                </div>
            </div>
        </Link>
        
        <Link to="/paket/nasi-box" className="menu-card-link">
            <div className="menu-card">
                <div className="card-image-container">
                    <img src="https://blog.tigadaracatering.id/wp-content/uploads/2020/07/WhatsApp-Image-2020-07-01-at-16.16.58-632x542.jpeg" alt="Nasi Box" />
                </div>
                <div className="card-content">
                    <h3>Paket Nasi Box</h3>
                    <p>Praktis dan higienis untuk acara kantor, seminar, atau perjalanan.</p>
                </div>
            </div>
        </Link>
        
        <Link to="/paket/prasmanan" className="menu-card-link">
            <div className="menu-card">
                <div className="card-image-container">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600" alt="Prasmanan" />
                </div>
                <div className="card-content">
                    <h3>Layanan Prasmanan</h3>
                    <p>Pilihan menu beragam untuk pesta pernikahan, ulang tahun, dan acara besar lainnya.</p>
                </div>
            </div>
        </Link>
        
      </div>
    </section>
  );
}

export default Menu;