import React from 'react' 
import banner1 from '../pages/assets/1.png';
import banner2 from '../pages/assets/2.png';

import banner3 from '../pages/assets/3.png';
import banner4 from '../pages/assets/4.png';




const Banner = () => {
  return (
    <div
            id="FakeShopCarouselInterval"
            className="carousel slide"
            data-bs-ride="carousel"
        
          >
            <div className="carousel-inner"     style={{



          }}>
              <div className="carousel-item active" data-bs-interval="10000">
                <img src={banner1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={banner2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={banner3} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={banner4} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#FakeShopCarouselInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#FakeShopCarouselInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
  )
}

export default Banner