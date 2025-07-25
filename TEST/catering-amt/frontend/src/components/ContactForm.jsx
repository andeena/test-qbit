function ContactForm({ formData, handleChange, handleSubmit, serverMessage, isError }) {
  return (
    <section id="kontak" className="container section">
      <h2 className="section-title">Hubungi Kami</h2>
      <p className="section-subtitle">Punya pertanyaan atau ingin memesan? Isi form di bawah ini!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="nama" placeholder="Nama Anda" value={formData.nama} onChange={handleChange} required />
        {/* <input type="email" name="email" placeholder="Email Anda" value={formData.email} onChange={handleChange} required /> */}
        <input type="tel" name="telepon" placeholder="Nomor Telepon" value={formData.telepon} onChange={handleChange} />
        <textarea name="pesan" rows="5" placeholder="Tulis pesan atau detail pesanan Anda di sini..." value={formData.pesan} onChange={handleChange} required></textarea>
        <button type="submit">Kirim Pesan</button>
      </form>
      {serverMessage && (
        <p className={`server-message ${isError ? 'error' : 'success'}`}>
          {serverMessage}
        </p>
      )}
    </section>
  );
}

export default ContactForm;