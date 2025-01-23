import React from 'react'

export default function ContactUs() {
  return (
    <>
    <div id="contact">
        <div className="container">
          <div className="contact-row row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>contact@example.com</p>
              <p>0123456789</p>
              <div className="social-icons">
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <a href="" className="btn btn2" download>
                Download CV
              </a>
            </div>
            <div className="contact-right">
              <form action="">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name=" email"
                  placeholder="Enter your email"
                  required
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your message"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn2"
                  style={{ color: "black" }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
