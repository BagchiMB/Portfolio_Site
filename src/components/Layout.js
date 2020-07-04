import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen,setIsOpen]=React.useState(false);
  const toggleSidebar=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <React.Fragment>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/> 
      {children}
      <Footer />
    </React.Fragment>
  )
}

export default Layout
