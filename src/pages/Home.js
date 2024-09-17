import React from "react";
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Import your custom CSS for other styles

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
  };

  return (
    <div className="home-container">
      <h2>COLLEGE GEAR EXCHANGE: WHERE STUDENTS HELP STUDENTS</h2>
      <p>Connect with students to buy and sell used college materials quickly and easily through our intuitive marketplace.</p>

      <div className="search-bar">
        <input type="text" placeholder="Search items..." />
        <button>🔍</button>
      </div>

      {/* Slider Section */}
      <section className="slider-section">
        <h3>Trending Advertisements</h3>
        <Slider {...sliderSettings}>
          <div>
            <img src="/assets/phone.png" alt="Phone" className="slider-img" />
          </div>
          <div>
            <img src="/assets/bike.png" alt="Bike" className="slider-img" />
          </div>
          <div>
            <img src="/assets/calculator.png" alt="Calculator" className="slider-img" />
          </div>
        </Slider>
      </section>

      <footer className="footer">
        <div>
          <h4>Contact Us</h4>
          <p>Email: @campusthrift.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/Twitter.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/facebook.png" alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
