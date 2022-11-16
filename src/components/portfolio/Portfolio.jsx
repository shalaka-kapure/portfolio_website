import './portfolio.css';
import ecommerce from "../../img/ecommerce.jpg";
import newsdaily from "../../img/newsdaily.jpg";
import textutilis from "../../img/textutilis.jpg";
import inotebook from "../../img/inotebook.jpg";

const Portfolio = () => {
  return (
    <>
    <div className='portfolio' id='portfolio'> 
      <h1>Portfolio</h1>
      <div className="container">
        <div className="p-item">
          <img src={ecommerce} alt="" />
          <h3>Ecommerce App</h3>
        </div>
        <div className="p-item">
          <img src={textutilis} alt="" />
          <h3>Text Conversion App</h3>
        </div>
        <div className="p-item">
          <img src={newsdaily} alt="" />
          <h3>Daily News App</h3>
        </div>
        <div className="p-item">
          <img src={inotebook} alt="" />
          <h3>Notes App</h3>
        </div>
      </div>
    </div>
    </>
  );
}

export default Portfolio;
