import React from 'react'
import { Carousel } from 'react-bootstrap'

const LandPage = () => {
  return (
    <div className='mt-5'>
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default LandPage


