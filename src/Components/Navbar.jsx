import React from "react";

export default function Navbar() {
  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            {/* <!-- <img src="" alt="logo" className="logo" /> --> */}
            <h2>
              Hey<span>&emsp;Himanshu!</span>
            </h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-text">
            <p>Frontend Developer</p>
            <h1 className="scale-in-left animate__animated animate__fadeInUp">
              Hi, I'm <span>Himanshu</span>
              <br />
              Sharma from India
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
