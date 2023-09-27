import skill1 from "../assets/img/C.png";
import skill2 from "../assets/img/C++.png";
import skill3 from "../assets/img/java.png";
import skill4 from "../assets/img/python.png";
import skill5 from "../assets/img/html.png";
import skill6 from "../assets/img/css.png";
import skill7 from "../assets/img/js.png";
import skill8 from "../assets/img/mongodb.svg";
import skill9 from "../assets/img/react.png";
import skill10 from "../assets/img/embeded-c.png";
import skill11 from "../assets/img/auto.jpg";
import skill12 from "../assets/img/FreeRTOS.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h5>python</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={skill9} alt="Image" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={skill10} alt="Image" />
                                <h5>Embedded C</h5>
                            </div>
                            <div className="item auto">
                                <img src={skill11} alt="Image"  />
                                <h5>Autosar</h5>
                            </div>
                            <div className="item auto2">
                                <img src={skill12} alt="Image" />
                                <h5>FreeRTOS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
