import './App.css';
import '../fonts/fonts.css';

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#"><img src="./img/logo.svg" alt="logo" /></a>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
        <div className="chat-help">
          <img src="./img/chat (1).svg" alt="Chat Icon" className="chat-icon" />
          <div className="help-info">
            <p><span>Need help?</span></p>
            <p>(307) 555-0133</p>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Journey with Confidence</h1>
          <h2><span>Migrate</span> with Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit <br /> amet arcu nunc. Duis egestas ac ante sed tincidunt.</p>
          <button className="btn">
            Learn More <img src="./img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>

      <section className="about">
        <div className="about_left">
          <div className="about-image">
            <img src="./img/about.png" alt="About Us Image" />
          </div>
        </div>
        <div className="about_right">
          <div className="about-header">
            <h2>About Us</h2>
            <img src="./img/object.svg" alt="Icon" className="about-icon" />
          </div>
          <h3>Unknown Wanderlust <br /> <span>Your Journey into</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit <br /> amet arcu nunc. Duis egestas ac ante sed tincidunt.</p>

          <div className="checkbox-section">
            <div className="checkbox-item">
              <div className="chek">
                <input type="checkbox" id="safety1" />
                <label htmlFor="safety1">Safety Guides</label>
              </div>
              <p>Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit.</p>
            </div>

            <div className="checkbox-item">
              <div className="chek">
                <input type="checkbox" id="safety2" />
                <label htmlFor="safety2">Safety Guides</label>
              </div>
              <p>Lorem ipsum dolor sit amet, conse <br /> ctetur adipiscing elit.</p>
            </div>
          </div>

          <button className="btn">Read More
            <img src="./img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
