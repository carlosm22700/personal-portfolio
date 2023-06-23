import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Blackjack Game",
      liveUrl: "https://carlosm22700.github.io/blackjack-project-one/",
      codeUrl: "https://github.com/carlosm22700/blackjack-project-one",
      details: [
        {
          description: "Screenshot 1 description",
          imgUrl: projImg1,
        },
        {
          description: "Screenshot 2 description",
          imgUrl: projImg2,
        },
      ],
    },
    {
      title: "AniDex",
      liveUrl: "https://anidex-app.herokuapp.com/",
      codeUrl: "https://github.com/carlosm22700/Anime-Progress-Tracker",
      details: [
        {
          description: "Screenshot 1 description",
          imgUrl: projImg3,
        },
        {
          description: "Screenshot 2 description",
          imgUrl: projImg1,
        },
      ],
    },
    {
      title: "NEED",
      liveUrl: "https://need-829.herokuapp.com/",
      codeUrl: "https://github.com/carlosm22700/NEED-ecommerce",
      details: [
        {
          description: 'Screenshot 1 des',
          imgUrl: projImg1,
        },
        {
          description: 'Screenshot 2 des',
          imgUrl: projImg2
        },
      ]
    },
    {
      title: "FitTrax",
      liveUrl: "https://fittrax.herokuapp.com/accounts/login/?next=/",
      codeUrl: "https://github.com/carlosm22700/Fitness-Tracker",
      details: [
        {
          description: 'Screenshot 1 des',
          imgUrl: projImg1,
        },
        {
          description: 'Screenshot 2 des',
          imgUrl: projImg2
        },
      ]
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {
                        projects.map((project, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link eventKey={index}>{project.title}</Nav.Link>
                          </Nav.Item>
                        ))
                      }
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {
                        projects.map((project, index) => (
                          <Tab.Pane eventKey={index} key={index}>
                            <Row>
                              {
                                project.details.map((detail, idx) => (
                                  <ProjectCard
                                    key={idx}
                                    title={project.title}
                                    description={detail.description}
                                    imgUrl={detail.imgUrl}
                                  />
                                ))
                              }
                            </Row>
                          </Tab.Pane>
                        ))
                      }
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}