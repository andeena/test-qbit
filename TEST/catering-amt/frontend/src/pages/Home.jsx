import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link

import Opening from '../components/Opening';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';

function Home() {
  const [formData, setFormData] = useState({
    nama: '',
    // email: '',
    telepon: '',
    pesan: '',
  });

  const [serverMessage, setServerMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage('Mengirim pesan...');
    setIsError(false);

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/pesan', formData);
      setServerMessage(response.data.message);
      setFormData({ nama: '', email: '', telepon: '', pesan: '' });
    } catch (error) {
      setIsError(true);
      setServerMessage(error.response?.data?.message || 'Gagal terhubung ke server.');
    }
  };
  
  return (
    <main>
      <Opening />
      <Menu />
      <Gallery />
      <ContactForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        serverMessage={serverMessage}
        isError={isError}
      />
    </main>
  );
}

export default Home;