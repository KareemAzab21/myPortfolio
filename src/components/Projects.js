import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/smart.jpg";
import projImg2 from "../assets/img/calc.png";
import projImg3 from "../assets/img/window.jpeg";
import projImg4 from "../assets/img/traffic-lights.jpg";
import projImg5 from "../assets/img/seat.webp";
import projImg6 from "../assets/img/rover.jpg";
import projImg7 from "../assets/img/race.jpg";
import projImg8 from "../assets/img/port.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const embeddedprojects = [
    {
      title: "Smart Door Lock System",
      description: "Developed a smart door lock system using an Atmega16 microcontroller. In order to make the system more versatile, I created configurable drivers for various components including the motor, timer, LCD, keypad, and I2C. Additionally, I implemented interrupts to improve the system’s responsiveness and efficiency.",
      imgUrl: projImg1,
    },
    {
      title: "Multifunctional-Calculator-with-ARM",
      description: "Demonstrated my proficiency in embedded systems programming by designing and implementing an advanced calculator on the TivaC board, leveraging my expertise in interrupts and timers to enable timer and stopwatch functionality ",
      imgUrl: projImg2,
    },
    {
      title: "Passenger Window Control",
      description: "implement to control panel for the passenger window from the passenger seat and the driver seat using FreeRTOS APIs to handle resource and interrupt management.",
      imgUrl: projImg3,
    },
    {
      title: "Led State Machine",
      description: "Full Layer AUTOSAR by Cordoba Autosar Tool to generate the dynamic configuration of the SWCs, the RTE and the BSW",
      imgUrl: projImg4,
    },
    {
      title: "Driver Seat Manager",
      description: "Configured its SWCs, ports, port interfaces, assembly connections and data mapping using Sprints Autosar Authoring Tool (SAAT) for Seat Manager Model with automatic and manual control features",
      imgUrl: projImg5,
    },

  ];

  const softwareprojects=[
    {
      title: "Rover Mars Simulation",
      description: "Leveraged my expertise in Python, OpenCV, and NumPy to write scripts that employed computervision technques for autonomous navigation and gold rock collection in a simulation, earning top marks for my project’s flawless execution, collision avoidance, and real-time mapping of the surrounding world",
      imgUrl: projImg6,
    },
    {
      title: "Online Multiplayer Racing Game",
      description: "mplemented an online racing game with client-server model using socket programming, the project handles the distributed system Transparency and fault tolerance. The game has a chat feature and the chat was on another server and both servers were deployed on AWS EC2 instances so it can be online",
      imgUrl: projImg7,
    },
    {
      title: "My Portfolio",
      description: "Implemented My portfolio using ReactJS",
      imgUrl: projImg8,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-spacearound align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first" id="projects-tabs-tab-first">Embedded</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Software</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          embeddedprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          softwareprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
