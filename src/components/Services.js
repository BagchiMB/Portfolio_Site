import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className="section bg-grey">
    <Title title="services" />
    <div className="section-center services-center">
      {services.map((service)=>{
        const {id,title,icon,text}=service
        return <article data-sal='flip-left' data-sal-easing="ease" data-sal-duration='700' key={id} className="service">
          {icon}
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{text}</p>
        </article>
      })}
    </div>
  </section>
}

export default Services
