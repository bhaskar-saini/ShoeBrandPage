import React from 'react'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
import shoepic from '../assets/shoe_image.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src={flipkart} alt="flipkart" />
                    <img src={amazon} alt="amazon" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src={shoepic} alt="shoe picture" />
        </div>
    </div>
  )
}

export default Hero