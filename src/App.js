import React, { useState, useEffect, useRef } from 'react';
import { useSprings, animated } from 'react-spring';
import Modal from 'react-modal';
import Logo from './assets/holidaysfarm-logo.webp';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import waterPump from './assets/waterpump.png';
import support from './assets/support.png';
import mangotree from './assets/mangotree.png';
import powersupply from './assets/powersupply.png';
import gate from './assets/gate.png';
import dreamsImage from './assets/single-mango-tree.jpg';
import aboutimg from './assets/01.png';
import dreamsImage1 from './assets/09.png';
import slide1 from './assets/slide_1.png';
import slide2 from './assets/slide_2.png';
import slide3 from './assets/slide_3.png';
import slide4 from './assets/slide_4.png';
import slide5 from './assets/slide_5.png';
import slide6 from './assets/slide_2.png';
import mail from './assets/icons8-mail-48.png';
import phone from './assets/icons8-call-male-50.png';
import location from './assets/icons8-location-50.png';
import gsap from 'gsap';
Modal.setAppElement('#root');
function App() {
  const [partnerCount1, setPartnerCount1] = useState(0);
  const [partnerCount2, setPartnerCount2] = useState(0);
  const [partnerCount3, setPartnerCount3] = useState(0);
  const [centerIndex, setCenterIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
  });

  const counterRef1 = useRef(null);
  const counterRef2 = useRef(null);
  const counterRef3 = useRef(null);

  const accordionItems = [
    {
      title: 'How Does M/S Holiday Mango Farms Select Its Farmland Projects?',
      content:
        'At M/S Holiday Mango Farms, We Take A Meticulous Approach In Choosing Our Projects. Our Selection Process Involves Thorough Scrutiny To Ensure That The Farmlands Are Not Only Fertile But Also Tailored To Be Investor-Friendly. We Prioritize Locations With Ideal Soil Conditions, Climate, And Accessibility To Create A Successful Investment Environment.',
    },
    {
      title: 'loremlorem Item 2',
      content:
        'lorem loremloremloremloremloremloremloremloremloremloremloremlorem ',
    },
    {
      title: 'loremloremlorem Item 3',
      content:
        'Content of Accordion Item 3loremloremloremloremloremloremloremloremloremloremloremloremloremlorem',
    },
    // Add more items as needed
  ];
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    const targetCount1 = 2;
    const targetCount2 = 25;
    const targetCount3 = 15;

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    const interval1 = setInterval(() => {
      count1++;
      setPartnerCount1(count1);
      if (count1 >= targetCount1) {
        clearInterval(interval1);
      }
    }, 500);

    const interval2 = setInterval(() => {
      count2++;
      setPartnerCount2(count2);
      if (count2 >= targetCount2) {
        clearInterval(interval2);
      }
    }, 100);

    const interval3 = setInterval(() => {
      count3++;
      setPartnerCount3(count3);
      if (count3 >= targetCount3) {
        clearInterval(interval3);
      }
    }, 100);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    animateCounter(partnerCount1, counterRef1);
    animateCounter(partnerCount2, counterRef2);
    animateCounter(partnerCount3, counterRef3);
  }, [partnerCount1, partnerCount2, partnerCount3]);
  const animateCounter = (count, ref) => {
    gsap.to(ref.current, {
      duration: 1,
      innerHTML: count,
      snap: 'innerHTML',
      ease: 'power1.out',
    });
  };

  const slide = [
    { key: 1, imageUrl: slide1 },
    { key: 2, imageUrl: slide2 },
    { key: 3, imageUrl: slide3 },
    { key: 4, imageUrl: slide4 },
    { key: 5, imageUrl: slide5 },
    { key: 6, imageUrl: slide6 },
    // Add more slides as needed
  ];
  const springs = useSprings(
    slide.length,
    slide.map((_, index) => ({
      opacity: 1,
      transform: `translateX(${index * 100}%)`,
      from: { opacity: 0, transform: 'scale(0.8)' },
      config: { mass: 5, tension: 500, friction: 100 },
    }))
  );

  const threeD = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => {
      setCenterIndex(next);
    },
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Breakpoint for small-sized screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          dots: true,
        },
      },
    ],
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,
    autoplaySpeed: 1300,
    cssEase: 'linear', // Set the easing type to linear
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for medium-sized screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Breakpoint for small-sized screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  const slides = [
    {
      image: waterPump,
      caption: 'Slide 1',
      content: 'Content for Slide 1',
    },
    {
      image: support,
      caption: 'Slide 2',
      content: 'Content for Slide 2',
    },
    {
      image: mangotree,
      caption: 'Slide 3',
      content: 'Content for Slide 3',
    },
    {
      image: powersupply,
      caption: 'Slide 3',
      content: 'Content for Slide 3',
    },
    {
      image: gate,
      caption: 'Slide 3',
      content: 'Content for Slide 3',
    },
    // Add more slides as needed
  ];
  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closePopup = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., submit to server)
    console.log(formData);
    // Close modal after form submission
    let x = { name: '', city: '', phone: '' };
    let y = formData;
    setFormData({ name: '', city: '', phone: '' });
    console.log(formData);
    alert(y.name + ' ' + 'Your signup successfully');

    closeModal();
  };
  return (
    <>
      <section id="home">
        <div className="bg-image">
          <div className={`container ${isSticky ? 'sticky' : ''}`}>
            <div className="image-container">
              <a href="#home">
                {' '}
                <img src={Logo} alt="Image" />
              </a>
            </div>
            <div className="nav-container">
              <nav>
                <ul>
                  <li>
                    <a href="#home">HOME</a>
                  </li>
                  <li>
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>
                    <a href="#services">BLOG</a>
                  </li>
                  <li>
                    <a href="#contact">CONTACT</a>
                  </li>
                  <li>
                    <a href="#gallery">GALLERY</a>
                  </li>
                  <li>
                    <a href="#faq">FARMING</a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="navbar-mobile">
              <div className="hamburger-menu" onClick={toggleMenu}>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
              </div>
              <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skill">Skill</a>
                </li>
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button
                    type="button"
                    class="close-menu"
                    id="close-btn"
                    onClick={closeMenu}
                  >
                    X
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="form-section">
            <div className="left-side-section">
              <h5>Tiruttani Mango Farm Your Investment in Lush Mango Groves</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                omnis necessitatibus assumenda obcaecati architecto at sit
                culpa? Natus quisquam nam debitis commodi adipisci dolore fugiat
                odit quidem illum, eum iure!
              </p>
              <button className="book-btn">Book Now</button>
            </div>
            <div className="right-side-section">
              <div className="form-section-inner">
                <p className="lets-meet">Lets Meet</p>
                <p className="get-in-touch">Get In Touch</p>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your Name*"
                      name="name"
                      value={formData.name}
                      className="form-contol"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your city*"
                      name="city"
                      value={formData.city}
                      className="form-contol"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your PhoneNo*"
                      name="phone"
                      value={formData.phone}
                      className="form-contol"
                      onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="sign-up-btn">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section id="about">
        <div className="about-section-inner">
          <div className="about-left-side">
            <h4>ABOUT US</h4>
            <p className="about-agri">
              Cultivating Prosperity: Your Investment in Agricultural Excellence
            </p>
            <p className="about-parahraph">
              Established just two years ago, Tiruttani Mango Farm has become a
              leading provider of mango farm land for sale in Tiruttani. We
              offer a unique and lucrative investment opportunity, allowing you
              to sow the seeds of financial growth in the vibrant fields of
              agriculture. Enter the world of Tiruttani Mango Farm, where our
              commitment to excellence and agricultural expertise promises a
              rewarding journey for both our farms and your investments.
            </p>
          </div>
          <div className="about-right-side w-50">
            <img src={aboutimg} alt="" width={'100%'} />
          </div>
        </div>
      </section>
      {/* Dream section */}

      <section id="services">
        <div className="dream-section">
          <div className="dreams-left-section w-50">
            <img src={dreamsImage1} alt="" />
          </div>
          <div className="dreams-right-section w-50">
            <h5>Green Dreams, Golden Harvests: Acquire Your Mango Farm!</h5>
            <p className="about-parahraph">
              Established just two years ago, Tiruttani Mango Farm has become a
              leading provider of mango farm land for sale in Tiruttani. We
              offer a unique and lucrative investment opportunity, allowing you
              to sow the seeds of financial growth in the vibrant fields of
              agriculture. Enter the world of Tiruttani Mango Farm, where our
              commitment to excellence and agricultural expertise promises a
              rewarding journey for both our farms and your investments.
            </p>
            <button className="book-btn about-btn" onClick={openModal}>
              Book Now
            </button>
          </div>
        </div>
      </section>
      {/* Aminities section */}
      <section className="aminites-section">
        <div className="aminities">
          <p>SITES OUR AMENITIES</p>
        </div>
        <div className="slider-section">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="slider-box">
                <img src={slide.image} alt={slide.caption} />
                <div className="carousel-caption">
                  <h3>{slide.caption}</h3>
                  <p>{slide.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="counter-section">
        <div className="text-center">
          <div ref={counterRef1} className="counter">
            {partnerCount1}+
          </div>
          <p className="years-inner">2 Years Successful Ventures</p>
        </div>
        <div className="text-center">
          <div ref={counterRef2} className="counter">
            {partnerCount2}+
          </div>
          <p className="years-inner">25+ Satisfied Partners</p>
        </div>
        <div className="text-center">
          <div ref={counterRef3} className="counter">
            {partnerCount3}+
          </div>
          <p className="years-inner">15+ ROI Success Stories</p>
        </div>
      </section>
      {/* our Gallery */}
      <section className="our-gallery-section" id="gallery">
        <div className="text-center our-gallery-sec-inner">
          <h4>OUR GALLERY</h4>
          <p>Our Prime SiteImage</p>
        </div>
        <div>
          <div className="slider-container">
            <Slider {...threeD}>
              {springs.map((style, index) => (
                <animated.div
                  key={index}
                  style={style}
                  className="animated-img"
                >
                  <img
                    src={slide[index].imageUrl}
                    alt={`Slide ${index + 1}`}
                    width={'100%'}
                    className={
                      index === centerIndex ? 'center-image' : 'side-image'
                    }
                  />
                </animated.div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* contact us  */}
      <section className="contact-us" id="contact">
        <div className="contact-us-inner-section">
          <div className="contact-left-side w-50">
            <p className="contact-heading">CONTACT US</p>
            <p className="contact-left-inner-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              blanditiis ducimus incidunt sint, sunt modi soluta voluptates
              nostrum qui culpa consequatur molestiae quaerat? Nostrum
              dignissimos obcaecati voluptates! Amet, aperiam temporibus.
            </p>
            <div className="contact-us-inner">
              <div className="contact-us-img">
                <img src={mail} alt="" width={'30px'} />
              </div>
              <p>mango@gmail.com</p>
            </div>
            <div className="contact-us-inner">
              <div className="contact-us-img">
                <img src={phone} alt="" width={'30px'} />
              </div>
              <p>9876543210</p>
            </div>
            <div className="contact-us-inner">
              <div className="contact-us-img">
                <img src={location} alt="" width={'30px'} />
              </div>
              <p>Chennai</p>
            </div>
          </div>
          <div className="right-side-section">
            <div className="form-section-inner">
              <p className="lets-meet">Lets Meet</p>
              <p className="get-in-touch contact-us-touch">Get In Touch</p>
              <form action="">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Name*"
                    className="form-contol"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your city*"
                    className="form-contol"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Enter your PhoneNo*"
                    className="form-contol"
                  />
                </div>
                <button type="submit" className="sign-up-btn contact-us-btn">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section className="faq" id="faq">
        <div className="faq-question">
          <h4 className=" text-center"> FAQ </h4>
          <div className="accordion">
            {accordionItems.map((item, index) => (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-title"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5>{item.title}</h5>
                  <span>{openIndex === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`accordion-content ${
                    openIndex === index ? 'open' : ''
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* footer section  */}
      <section className="footer">
        <div className="footer-section-inner">
          <div className="w-50">
            <div className="image-container">
              <img src={Logo} alt="Image" />
            </div>
            <p className="footer-para">
              Established just two years ago, M/S Holiday Mango Farms has
              quickly become a notable player in the agribusiness sector,
              offering a unique and alluring investment opportunity.{' '}
            </p>
            <div class="home-sci">
              <a href="https://www.facebook.com/" target="_blank">
                <i class="bx bxl-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i class="bx bxl-instagram"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=9876543210"
                target="_blank"
              >
                <i class="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-kumar-v-723962237/"
                target="_blank"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="our-links">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/services">BLOG</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
              <li>
                <a href="/contact">GALLERY</a>
              </li>
              <li>
                <a href="/contact">FARMING</a>
              </li>
            </ul>
          </div>
          <div className="our-links">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/services">BLOG</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
              <li>
                <a href="/contact">GALLERY</a>
              </li>
              <li>
                <a href="/contact">FARMING</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div>{/* Your other content */}</div>

      {isModalOpen == true && (
        <div>
          <div className="popup">
            <div className="popup-content">
              <button className="close-button" onClick={closePopup}>
                X
              </button>
              <div className="right-side-section">
                <div className="form-section-inner">
                  <p className="lets-meet">Lets Meet</p>
                  <p className="get-in-touch">Get In Touch</p>
                  <form action="">
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your Name*"
                        className="form-contol"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your city*"
                        className="form-contol"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter your PhoneNo*"
                        className="form-contol"
                      />
                    </div>
                    <button type="submit" className="sign-up-btn">
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
