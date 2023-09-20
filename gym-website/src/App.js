import React from 'react'
import {Footer,Schedule, Gallery, Form, About, Events, Weather} from './containers';
import {Navbar,BasicSlider} from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg"> 
        <Navbar />
        <BasicSlider/>
      </div>
      <About/>
      <Form/>
      <Schedule/>
      <Events/>
      <Gallery/>
      <Weather/>
      <Footer/>
    </div>
  )
  
}

export default App
