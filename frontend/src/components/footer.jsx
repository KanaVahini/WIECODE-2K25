import React from 'react';

export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        {/* Main Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="brand-title">Authentify</h2>
            <p className="brand-tagline">AI-powered verification for truth</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>Product</h4>
              <a href="#fake-news">News Detection</a>
              <a href="#fake-product">Product Detection</a>
              <a href="#fake-review">Review Detection</a>
            </div>

            <div className="link-column">
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="link-column">
              <h4>Legal</h4>
              <a href="#privacy">Privacy</a>
              <a href="#terms">Terms</a>
              <a href="#security">Security</a>
            </div>
          </div>

          <div className="footer-cta">
            <h3>Stay Updated</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>→</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2024 Authentify</p>
          
          <div className="footer-social">
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#linkedin" className="social-icon">in</a>
            <a href="#github" className="social-icon">⚡</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .premium-footer {
          position: relative;
          width: 100%;
          background: linear-gradient(135deg, #8B2F2F, #4A0E0E);
          padding: 60px 0 0;
          overflow: hidden;
          margin-top: auto;
        }

        /* Subtle decorative gradient overlay */
        .premium-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%,
            rgba(212, 139, 106, 0.6) 50%,
            transparent 100%
          );
        }

        .premium-footer::after {
          content: '';
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212, 139, 106, 0.1), transparent 70%);
          bottom: -200px;
          right: -200px;
          pointer-events: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* Main Content Grid */
        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 2fr 1fr;
          gap: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(212, 139, 106, 0.25);
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .brand-title {
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #f5e6d3, #d48b6a, #f5e6d3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .brand-tagline {
          font-size: 14px;
          color: rgba(245, 230, 211, 0.7);
          font-weight: 500;
          margin: 0;
        }

        /* Links Section */
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .link-column h4 {
          font-size: 13px;
          font-weight: 800;
          color: #dabeb1ff;
          margin: 0 0 12px 0;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .link-column a {
          display: block;
          color: rgba(245, 230, 211, 0.7);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 8px;
          transition: all 0.25s ease;
        }

        .link-column a:hover {
          color: #f5e6d3;
          padding-left: 4px;
        }

        /* CTA Section */
        .footer-cta h3 {
          font-size: 16px;
          font-weight: 800;
          color: #f5e6d3;
          margin: 0 0 12px 0;
        }

        .newsletter-form {
          display: flex;
          gap: 8px;
        }

        .newsletter-form input {
          flex: 1;
          padding: 10px 16px;
          background: rgba(245, 230, 211, 0.1);
          border: 1px solid rgba(212, 139, 106, 0.3);
          border-radius: 10px;
          color: #f5e6d3;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .newsletter-form input::placeholder {
          color: rgba(245, 230, 211, 0.5);
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: #d48b6a;
          box-shadow: 0 0 0 3px rgba(212, 139, 106, 0.15);
          background: rgba(245, 230, 211, 0.15);
        }

        .newsletter-form button {
          width: 44px;
          height: 44px;
          padding: 0;
          background: linear-gradient(135deg, #d48b6a, #b36f54);
          border: none;
          border-radius: 10px;
          color: white;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .newsletter-form button:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(212, 139, 106, 0.4);
          background: linear-gradient(135deg, #e09d7a, #c97f5f);
        }

        /* Bottom Bar */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }

        .footer-bottom p {
          margin: 0;
          font-size: 13px;
          color: rgba(245, 230, 211, 0.6);
          font-weight: 500;
        }

        .footer-social {
          display: flex;
          gap: 10px;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(245, 230, 211, 0.1);
          border: 1px solid rgba(212, 139, 106, 0.3);
          border-radius: 8px;
          color: #d48b6a;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(212, 139, 106, 0.2);
          border-color: #d48b6a;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 139, 106, 0.3);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 0 24px;
          }

          .premium-footer {
            padding: 40px 0 0;
          }

          .footer-content {
            gap: 32px;
          }

          .footer-links {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }

          .brand-title {
            font-size: 20px;
          }
        }
      `}</style>
    </footer>
  );
}