import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-class"></SocialLinks>
      <h4>&copy; Mihir Bagchi {new Date().getFullYear()}</h4>
    </div>
  </footer>
}

export default Footer
