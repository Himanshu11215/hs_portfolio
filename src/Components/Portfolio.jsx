import React from "react";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src="./Images/pexels-ifreestock-585752.jpg" alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  rerum doloremque, n
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="./Images/pexels-ifreestock-585752.jpg" alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  rerum doloremque, n
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <div className="work">
              <img src="./Images/pexels-ifreestock-585752.jpg" alt="" />
              <div className="layer">
                <h3>Social Media App</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
                  rerum doloremque, n
                </p>
                <a href="#">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="btn">
            See more
          </a>
        </div>
      </div>
    </>
  );
}
