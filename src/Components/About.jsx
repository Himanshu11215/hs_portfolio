import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabname) => {
    setActiveTab(tabname);
  };
  // var tablinks = document.getElementsByClassName("tab-links");
  // var tabcontents = document.getElementsByClassName("tab-contents");
  // function opentab(tabname) {
  //   for (tablink of tablinks) {
  //     tablink.classList.remove("active-link");
  //   }
  //   for (tabcontent of tabcontents) {
  //     tabcontent.classList.remove("active-tab");
  //   }
  //   event.currentTarget.classList.add("active-link");
  //   document.getElementById(tabname).classList.add("active-tab");
  // }
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              src="./Images/danny-greenberg-3PDrWzk7aAs-unsplash.jpg"
              alt="About"
            />
          </div>
          <div className="about-col-2 ">
            <h1 className="subtitle animate__animated animate__fadeInUp">
              About Me
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-2s">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              omnis officia tempore amet et quod ab veritatis, vero,
              necessitatibus ipsam debitis. Ut placeat aut iure cum recusandae
              perferendis numquam ducimus!
            </p>

            <div className="tab-titles">
              <p
                className={`tab-links ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links ${
                  activeTab === "experience" ? "active-link" : ""
                }`}
                onClick={() => opentab("experience")}
              >
                Experience
              </p>
              <p
                className={`tab-links ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "skills" ? "active-tab" : ""
              }`}
              id="skills"
            >
              <ul>
                <li>
                  <span>UI/UX</span>
                  <br />
                  Designing Web/App interfaces
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web App Development
                </li>
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "experience" ? "active-tab" : ""
              }`}
              id="experience"
            >
              <ul>
                <li>
                  <span>Frontend Developer</span>
                  <br />
                  Worked on interactive UI components.
                </li>
                <li>
                  <span>Backend Developer</span>
                  <br />
                  Handled APIs and server-side logic.
                </li>
              </ul>
            </div>

            <div
              className={`tab-contents ${
                activeTab === "education" ? "active-tab" : ""
              }`}
              id="education"
            >
              <ul>
                <li>
                  <span>Bachelor's Degree</span>
                  <br />
                  Computer Science and Engineering
                </li>
                <li>
                  <span>Certifications</span>
                  <br />
                  React, JavaScript, and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";

// export default function About() {

//       var tablinks = document.getElementsByClassName("tab-links");
//       var tabcontents = document.getElementsByClassName("tab-contents");
//       function opentab(tabname) {
//         for (tablink of tablinks) {
//           tablink.classList.remove("active-link");
//         }
//         for (tabcontent of tabcontents) {
//           tabcontent.classList.remove("active-tab");
//         }
//         event.currentTarget.classList.add("active-link");
//         document.getElementById(tabname).classList.add("active-tab");
//       }

//   return (
//     <>
//       <div id="about">
//         <div className="container">
//           <div className="row">
//             <div className="about-col-1">
//               <img
//                 src="./Images/danny-greenberg-3PDrWzk7aAs-unsplash.jpg"
//                 alt="image-1"
//               />
//             </div>
//             <div className="about-col-2">
//               <h1 className="subtitle">About Me</h1>
//               <p>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
//                 omnis officia tempore amet et quod ab veritatis, vero,
//                 necessitatibus ipsam debitis. Ut placeat aut iure cum recusandae
//                 perferendis numquam ducimus!
//               </p>

//               <div className="tab-titles">
//                 <p
//                   className="tab-links active-link"
//                   onClick={() => opentab("skills")}
//                 >
//                   Skills
//                 </p>
//                 <p className="tab-links" onClick={() => opentab("experience")}>
//                   Experience
//                 </p>
//                 <p className="tab-links" onClick={() => opentab("education")}>
//                   Education
//                 </p>
//               </div>
//               <div className="tab-contents active-tab" id="skills">
//                 <ul>
//                   <li>
//                     <span>UI?UX</span>
//                     <br />
//                     Designing Web/App interfaces
//                   </li>
//                   <li>
//                     <span>Web Development</span>
//                     <br />
//                     Web App Development
//                   </li>
//                   <li>
//                     <span>App Development</span>
//                     <br />
//                     Building Android/iOS apps
//                   </li>
//                 </ul>
//               </div>
//               <div className="tab-contents" id="experience">
//                 <ul>
//                   <li>
//                     <span>UI?UX</span>
//                     <br />
//                     Designing Web/App interfaces
//                   </li>
//                   <li>
//                     <span>Web Development</span>
//                     <br />
//                     Web App Development
//                   </li>
//                   <li>
//                     <span>App Development</span>
//                     <br />
//                     Building Android/iOS apps
//                   </li>
//                 </ul>
//               </div>
//               <div className="tab-contents" id="education">
//                 <ul>
//                   <li>
//                     <span>UI?UX</span>
//                     <br />
//                     Designing Web/App interfaces
//                   </li>
//                   <li>
//                     <span>Web Development</span>
//                     <br />
//                     Web App Development
//                   </li>
//                   <li>
//                     <span>App Development</span>
//                     <br />
//                     Building Android/iOS apps
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
