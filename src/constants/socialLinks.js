import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/BagchiMB",
  },
  {
    id: 2,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/teenage_dirtbag_10/",
  },
  {
    id: 3,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/mihir-bagchi-252196186/",
  },
  {
    id: 4,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/bagchi_mihir",
  },
  {
    id: 5,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/mihir.bagchi/",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
