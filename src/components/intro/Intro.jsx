import "./intro.css";
import me from "../../img/me.jpeg";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";
import Resume from "../Resume.docx";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "UI/UX Enthusiast", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="i-left">
        <div className="imgContainer">
          <img src={me} alt="" className="i-img" />
        </div>
      </div>
      <div className="i-right">
        <div className="wrapper">
          <h2>Hello, My name is </h2>
          <h1>Shalaka Kapure</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <p>
            Self-taught Frontend Web Developer due to my interest in technology
            and design.
          </p>
          <p>
            I'm interested in helping people and organisations create impact at
            scale. If you're working on something interesting, feel free to
            reach out to me.
          </p>
          <div className="button">
            <a href={Resume}>
              <button>Download CV</button>
            </a>
            <div className="p-icons">
              <a href="https://github.com/shalaka-kapure" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shalaka-kapure-636335230/"
                target="_blank" rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a href="https://codepen.io/shalaka_kapure" target="_blank" rel="noreferrer">
                
                <AiFillCodepenCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
