import React from 'react'
import Slider1 from "../Assects/Slider-1.jpg"
import Slider2 from "../Assects/Slider-2.png"
import Slider3 from "../Assects/Slider-3.jpg"

function Slider() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slider1} className="d-block w-100 sliderHeight" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Hire the Top Lawyers in Pakistan</h5>
        <p>Consult The Laywer Now</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100 sliderHeight" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h5>Ask Free Legal Questions</h5>
        <p>We are always here to help you out</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Slider2} className="d-block w-100 sliderHeight" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Free Legal Advice From Top Lawyers</h5>
        <p>Let the Top Lawyers helps in making better decisions for you</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}


export default Slider
