
import { useEffect } from "react";
import "../css/About.css";

export default function About() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <div className="about-page">

      <section className="about-hero">
        <span>ABOUT US</span>

        <h1>
          We make shopping
          <br />
          simple & better.
        </h1>

        <p>
          Welcome to My Store — a modern online shopping
          experience built to make finding your favorite products
          simple, fast and enjoyable.
        </p>
      </section>


      <section className="about-content">

        <div className="about-card">
          <div className="about-icon">⚡</div>

          <h2>Fast Experience</h2>

          <p>
            We focus on creating a fast and smooth shopping
            experience for every customer.
          </p>
        </div>


        <div className="about-card">
          <div className="about-icon">🛍️</div>

          <h2>Quality Products</h2>

          <p>
            We carefully select products to give our customers
            a better shopping experience.
          </p>
        </div>


        <div className="about-card">
          <div className="about-icon">❤️</div>

          <h2>Customer First</h2>

          <p>
            Our goal is to make every part of your shopping
            journey simple and enjoyable.
          </p>
        </div>

      </section>


      <section className="about-story">

        <div>
          <span>OUR STORY</span>

          <h2>Built with passion.</h2>

          <p>
            A.VAGHARI Store started with a simple idea:
            create an online store that feels modern,
            easy to use and enjoyable.
          </p>

          <p>
            From discovering products to viewing their details,
            everything is designed with simplicity in mind.
          </p>
        </div>

      </section>


      <section className="about-stats">

        <div>
          <strong>100+</strong>
          <span>Products</span>
        </div>

        <div>
          <strong>24/7</strong>
          <span>Online</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Modern</span>
        </div>

      </section>

    </div>
  );
}

