// app.jsx
import React, { useState } from 'react';
import './app.css';
import GoogleLogo from './assets/GoogleLogo';

function App() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email ${email} telah terdaftar untuk newsletter!`);
    setEmail('');
  };

  return (
    <div className="google-landing">
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <GoogleLogo />
          </div>
          <ul className="nav-links">
            <li><a href="#products">Produk</a></li>
            <li><a href="#solutions">Solusi</a></li>
            <li><a href="#about">Tentang Kami</a></li>
            <li><a href="#contact">Kontak</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="btn btn-outline">Masuk</button>
            <button className="btn btn-primary">Daftar</button>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Membangun Masa Depan Bersama Teknologi </h1>
          <p>Temukan berbagai solusi teknologi terdepan untuk kebutuhan bisnis dan individual Anda.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">Mulai Sekarang</button>
            <button className="btn btn-outline btn-large">Pelajari Lebih Lanjut</button>
          </div>
        </div>
        <div className="hero-image">
        <img src="https://hackmd.io/_uploads/ByUmbe81le.png" width="400" height="200" />
        </div>
      </section>

      <section className="features" id="products">
        <h2>Produk Unggulan Kami</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 2V6.99851C14 7.55677 14.4477 8 15.0067 8H21" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Google Documents</h3>
            <p>Buat, edit, dan kolaborasi dokumen secara real-time.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Google Cloud</h3>
            <p>Infrastruktur dan solusi cloud terdepan untuk bisnis.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M2 12H22" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Google Chrome</h3>
            <p>Browser cepat, aman, dan mudah digunakan.</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>1B+</h3>
          <p>Pengguna Aktif</p>
        </div>
        <div className="stat-item">
          <h3>150+</h3>
          <p>Negara</p>
        </div>
        <div className="stat-item">
          <h3>100+</h3>
          <p>Produk Inovatif</p>
        </div>
        <div className="stat-item">
          <h3>20+</h3>
          <p>Tahun Pengalaman</p>
        </div>
      </section>

      <section className="testimonials" id="solutions">
        <h2>Solusi untuk Beragam Kebutuhan</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <p>"Google Cloud telah membantu kami meningkatkan efisiensi operasional hingga 40% dan menghemat biaya infrastruktur IT. Aisya keren banget buat website nya!!"</p>
            <div className="testimonial-author">
            <img 
              src="https://hackmd.io/_uploads/S1xhR1Lkeg.png" 
              className="author-image" 
            />
            <div className="author-info">
              <h4>Zhafira Zoro</h4>
              <p>CEO, PT SA MEDIA</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="cta" id="about">
        <div className="cta-content">
          <h2>Bergabung dengan Newsletter Kami</h2>
          <p>Dapatkan update terbaru tentang produk, layanan, dan inovasi Google.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Alamat Email Anda" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn btn-primary">Berlangganan</button>
          </form>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="footer-logo">
            <GoogleLogo small />
            <p>© Google Inc. 2025. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Produk</h4>
              <ul>
                <li><a href="#search">Search</a></li>
                <li><a href="#gmail">Gmail</a></li>
                <li><a href="#maps">Maps</a></li>
                <li><a href="#chrome">Chrome</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Bisnis</h4>
              <ul>
                <li><a href="#cloud">Google Cloud</a></li>
                <li><a href="#ads">Google Ads</a></li>
                <li><a href="#workspace">Workspace</a></li>
                <li><a href="#analytics">Analytics</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Tentang</h4>
              <ul>
                <li><a href="#about">Perusahaan</a></li>
                <li><a href="#careers">Karir</a></li>
                <li><a href="#investors">Investor</a></li>
                <li><a href="#sustainability">Keberlanjutan</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Kontak</h4>
              <ul>
                <li><a href="#contact">Hubungi Kami</a></li>
                <li><a href="#support">Dukungan</a></li>
                <li><a href="#offices">Kantor</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-bottom-links">
            <li><a href="#privacy">Kebijakan Privasi</a></li>
            <li><a href="#terms">Persyaratan</a></li>
            <li><a href="#settings">Pengaturan</a></li>
          </ul>
          <div className="social-icons">
            <a href="#twitter" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 4.01C21.5 4.25 20.96 4.42 20.4 4.5C20.99 4.16 21.43 3.61 21.65 2.95C21.1 3.28 20.5 3.52 19.83 3.65C19.3 3.09 18.56 2.75 17.75 2.75C16.19 2.75 14.95 4 14.95 5.54C14.95 5.79 14.97 6.03 15.02 6.25C12.75 6.13 10.73 5.02 9.35 3.32C9.08 3.79 8.93 4.34 8.93 4.93C8.93 6.04 9.48 7.02 10.3 7.59C9.85 7.58 9.42 7.45 9.04 7.23V7.26C9.04 8.63 9.99 9.79 11.27 10.08C11 10.15 10.73 10.18 10.44 10.18C10.24 10.18 10.04 10.17 9.85 10.13C10.25 11.27 11.29 12.11 12.52 12.13C11.56 12.9 10.35 13.37 9.05 13.37C8.79 13.37 8.54 13.36 8.29 13.33C9.53 14.15 10.98 14.64 12.55 14.64C17.73 14.64 20.57 10.36 20.57 6.64C20.57 6.5 20.56 6.37 20.56 6.24C21.13 5.84 21.63 5.34 22 4.76" fill="currentColor"/>
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;