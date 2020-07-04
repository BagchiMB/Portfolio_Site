import React from "react"
import { FaCode } from "react-icons/fa"
import {GrWordpress} from 'react-icons/gr'
import {DiGoogleCloudPlatform} from 'react-icons/di'
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Web Development",
    text: `I make wesites that loves to stay over the internet using the latest technology trends. I try to write managable and scalable code so expansion is never a problem. I have knowledge about MERN & JAM stack`,
  },
  {
    id: 2,
    icon: <GrWordpress className="service-icon" />,
    title: "Custom Management System",
    text: `Are you someone who wants to make a blog or some website with frequent changes in content ? Custom Management System (CMS) is the solution. It helps in easy editing and handling of content`,
  },
  {
    id: 3,
    icon: <DiGoogleCloudPlatform className="service-icon" />,
    title: "Hosting & Maintenance",
    text: `Yay, we made a website ! That doesn't mean it is live over the internet and people are ready to consume your website. No problem I got you covered, I am there for all the after work getting a domain, getting a cheap hosting, small changes that might have creeped into your mind after you made your site live. I am with you from start to end`,
  },
]
