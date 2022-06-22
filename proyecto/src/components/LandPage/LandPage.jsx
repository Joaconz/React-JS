import React from 'react'
import { Carousel } from 'react-bootstrap'

const LandPage = () => {
  return (
    <div className='mt-5'>
    <Carousel>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100 h-30"
        src="https://www.profesionalreview.com/wp-content/uploads/2020/11/Escritorio-GXT-1190-Magnicus.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>IMPROVE</h3>
        <p>your gaming experience</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100 h-30"
        src="https://thegadgetflow.com/wp-content/uploads/2022/04/Razer-Huntsman-Mini-Analog-gaming-keyboard-01-1024x577.jpeg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>CUSTOM</h3>
        <p>your leisure place</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-30"
        src="https://assets.spartangeek.com/cc/setups-gamers-baratos.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>ENJOY</h3>
        <p>your time gaming like a pro-player</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default LandPage


