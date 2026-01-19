export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SMSIndia Blog</h3>
            <p>Your trusted source for SMS, telecom, and technology trends in India.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><a href="/?category=Technology">Technology</a></li>
              <li><a href="/?category=Telecom">Telecom</a></li>
              <li><a href="/?category=SMS">SMS</a></li>
              <li><a href="/?category=FinTech">FinTech</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} SMSIndia Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
