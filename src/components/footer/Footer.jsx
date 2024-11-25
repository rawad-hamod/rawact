import "./footer.css"
import { FaEnvelope, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <p> designed by :Rawad Hamod 2024</p>
      <div className="social-icons">
      <a href="https://www.facebook.com/rawad.hamod.5/">
        <FaFacebook />
      </a>
      <a href="www.linkedin.com/in/rawad-hamod-9a8ab2261">
        <FaLinkedin />
      </a>
      <a href="mailto:rawadwhamod@gmail.com">
        <FaEnvelope />
      </a>
      <a href=" https://wa.me/963949257602">
        <FaWhatsapp />
      </a>
        </div>
    </div>
  );
}

export default Footer
