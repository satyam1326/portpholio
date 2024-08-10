import React from "react";
import Header from "../components/Header";
import MilestoneCard from "../components/MilestoneCard";
import { FaDownload } from "react-icons/fa";
import ProgressBar from "../components/ProgressBar";
import { saveAs } from "file-saver";
import Resume from "../assets/Nr-resume.pdf";

function About() {
  const downloadCv = () => {
    saveAs(Resume, "");
  };

  return (
    <div className="px-4 pb-12 lg:pb-0 md:px-16">
      <Header header="ABOUT" colorText="ME" label="RESUME" />
      <div className="flex flex-col items-start lg:flex-row">
        <div className="flex items-center justify-center flex-1 w-full text-left lg:block">
          <span>
            <h3 className="inline-block pb-1 mb-4 font-bold tracking-wide border-b text-h3 dark:text-white text-grayMedium">
              PERSONAL INFO
            </h3>
            <ul className="flex flex-col flex-wrap lg:items-center md:flex-row">
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">First Name : &nbsp;</span>
                <span className="info info-value">Nikesh</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Last Name : &nbsp;</span>
                <span className="info info-value">Raj</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Age : &nbsp;</span>
                <span className="info info-value">24 Yrs</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Nationality : &nbsp;</span>
                <span className="info info-value">Indian</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Freelance : &nbsp;</span>
                <span className="info info-value">Available</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Address : &nbsp;</span>
                <span className="info info-value">Sitamarhi, Bihar</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Phone : &nbsp;</span>
                <span className="info info-value">+91 9661822471</span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Email : &nbsp;</span>
                <span className="info info-value">
                  vermanikesh25@gmail.com
                </span>
              </li>
              <li className="basis-[50%] info-wrapper">
                <span className="info info-label">Language : &nbsp;</span>
                <span className="info info-value">Hindi, English</span>
              </li>
            </ul>
            <button
              onClick={downloadCv}
              className="inline-flex items-center my-8 hoverable btn-primary"
            >
              <span className="px-4">DOWNLOAD CV</span>{" "}
              <span className="px-4 text-white">
                <FaDownload />
              </span>
            </button>
          </span>
        </div>
        <div className="flex flex-wrap flex-1 gap-4">
          <MilestoneCard  label="Fresher" />
          <MilestoneCard count={10} label="completed projects" />
          
          <MilestoneCard count={5} label="earned certificate" />
        </div>
      </div>
      <div className="my-16 text-center skills">
        <h3 className="mb-8 font-bold tracking-wide text-h3 dark:text-white text-grayMedium">
          MY SKILLS
        </h3>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <ProgressBar count={85} label="HTML5" id="html" />
          <ProgressBar count={90} label="CSS3" id="css" />
          <ProgressBar count={80} label="JAVASCRIPT" id="javascript" />
          <ProgressBar count={90} label="SASS" id="sass" />
          <ProgressBar count={90} label="BOOTSTRAP" id="bootstrap" />
          <ProgressBar count={75} label="REACT" id="react" />
          <ProgressBar count={80} label="TAILWIND CSS" id="tailwind" />
          <ProgressBar count={65} label="NEXT JS" id="next" />
        </div>
      </div>
      
    </div>
  );
}

export default About;
