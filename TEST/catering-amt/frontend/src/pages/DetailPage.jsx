import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { dataPaket } from '../data/paketData.js'; 
import './DetailPage.css'; 

function DetailPage() {
  const { kategoriId } = useParams(); 
  const navigate = useNavigate(); 
  
  const data = dataPaket[kategoriId];

  if (!data) {
    return (
      <div className="container section">
        <h2>Paket Tidak Ditemukan</h2>
        <p>Paket yang Anda cari tidak ada. Silakan kembali ke halaman utama.</p>
        <button onClick={() => navigate('/')}>Kembali ke Beranda</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="container section">
        <button onClick={() => navigate(-1)} className="back-button">← Kembali</button>
        <div className="page-header">
          <h1 className="page-title">{data.namaKategori}</h1>
          <p className="page-subtitle">{data.deskripsi}</p>
        </div>

        <div className="detail-grid">
          {data.subPaket.map((paket, index) => (
            <div key={index} className="detail-card">
              <img src={paket.img} alt={paket.nama} className="detail-img" />
              <div className="detail-info">
                <h3 className="detail-nama">{paket.nama}</h3>
                <p className="detail-harga">{paket.harga}</p>
                <ul className="detail-isi-list">
                  {paket.isi.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link to="/#kontak" className="paket-cta-button">Pesan Sekarang</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;