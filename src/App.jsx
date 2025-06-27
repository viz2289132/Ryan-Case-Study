import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Experties from './Components/Expertise/Experties'
import Works from './Components/Works/Works'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'
import FeedbackFaqContact from './Components/FeedbackFaqContact/FeedbackFaqContact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experties/>
      <Works/>
      <Experience/>
      <Blog/>
      <FeedbackFaqContact/>
      <Footer/>
    </div>
  )
}

export default App