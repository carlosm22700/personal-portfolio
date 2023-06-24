import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj1Img1 from "../assets/img/Blackjack/proj1Img1.png";
import proj1Img2 from "../assets/img/Blackjack/proj1Img2.png";
import proj1Img3 from "../assets/img/Blackjack/proj1Img3.png";
import proj1Img4 from "../assets/img/Blackjack/proj1Img4.png";
import proj1Img5 from "../assets/img/Blackjack/proj1Img5.png";
import proj2Img1 from "../assets/img/Anidex/proj2Img1.png";
import proj2Img2 from "../assets/img/Anidex/proj2Img2.png";
import proj2Img3 from "../assets/img/Anidex/proj2Img3.png";
import proj2Img4 from "../assets/img/Anidex/proj2Img4.png";
import proj2Img5 from "../assets/img/Anidex/proj2Img5.png";
import proj2Img6 from "../assets/img/Anidex/proj2Img6.png";
import proj3Img1 from "../assets/img/Need/proj3Img1.png";
import proj3Img2 from "../assets/img/Need/proj3Img2.png";
import proj3Img3 from "../assets/img/Need/proj3Img3.png";
import proj3Img4 from "../assets/img/Need/proj3Img4.png";
import proj3Img5 from "../assets/img/Need/proj3Img5.png";
import proj3Img6 from "../assets/img/Need/proj3Img6.png";
import proj4Img1 from "../assets/img/Fittrax/proj4Img1.png";
import proj4Img2 from "../assets/img/Fittrax/proj4Img2.png";
import proj4Img3 from "../assets/img/Fittrax/proj4Img3.png";
import proj4Img4 from "../assets/img/Fittrax/proj4Img4.png";
import proj4Img5 from "../assets/img/Fittrax/proj4Img5.png";
import proj4Img6 from "../assets/img/Fittrax/proj4Img6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Blackjack Game",
      liveUrl: "https://carlosm22700.github.io/blackjack-project-one/",
      codeUrl: "https://github.com/carlosm22700/blackjack-project-one",
      details: [
        {
          description: "Get Started",
          imgUrl: proj1Img1,
        },
        {
          description: "Place A Bet",
          imgUrl: proj1Img3,
        },
        {
          description: "First Hand",
          imgUrl: proj1Img2,
        },
        {
          description: "Hand Resolved",
          imgUrl: proj1Img4,
        },
        {
          description: "Game Over!",
          imgUrl: proj1Img5,
        },
      ],
    },
    {
      title: "AniDex",
      liveUrl: "https://anidex-app.herokuapp.com/",
      codeUrl: "https://github.com/carlosm22700/Anime-Progress-Tracker",
      details: [
        {
          description: "Homepage",
          imgUrl: proj2Img1,
        },
        {
          description: "Add an Anime",
          imgUrl: proj2Img2,
        },
        {
          description: "View Anime",
          imgUrl: proj2Img3,
        },
        {
          description: "Update Anime",
          imgUrl: proj2Img4,
        },
        {
          description: "Delete Anime",
          imgUrl: proj2Img5,
        },
        {
          description: "View Details",
          imgUrl: proj2Img6,
        },
      ],
    },
    {
      title: "NEED",
      liveUrl: "https://need-829.herokuapp.com/",
      codeUrl: "https://github.com/carlosm22700/NEED-ecommerce",
      details: [
        {
          description: 'Auth Page',
          imgUrl: proj3Img1,
        },
        {
          description: 'Shop Page',
          imgUrl: proj3Img2,
        },
        {
          description: 'Details Page',
          imgUrl: proj3Img3,
        },
        {
          description: 'Cart Page',
          imgUrl: proj3Img4
        },
        {
          description: 'Checkout Page',
          imgUrl: proj3Img5,
        },
        {
          description: 'Confirmation Page',
          imgUrl: proj3Img6,
        },
      ]
    },
    {
      title: "FitTrax",
      liveUrl: "https://fittrax.herokuapp.com/accounts/login/?next=/",
      codeUrl: "https://github.com/carlosm22700/Fitness-Tracker",
      details: [
        {
          description: 'Auth Page',
          imgUrl: proj4Img6,
        },
        {
          description: 'Home Page',
          imgUrl: proj4Img1
        },
        {
          description: 'Add Routine',
          imgUrl: proj4Img2
        },
        {
          description: 'View Routines',
          imgUrl: proj4Img3
        },
        {
          description: 'Search Exercise',
          imgUrl: proj4Img4
        },
        {
          description: 'Add Exercise',
          imgUrl: proj4Img5
        },
      ]
    }
  ];

  const [currentTitle, setCurrentTitle] = useState(projects[0].title);
  const [currentDescription, setCurrentDescription] = useState("A simple and fun blackjack game built with HTML, CSS, and JavaScript. The game allows users to test their luck by increase/decrease their bet and playing multiple rounds of blackjack against a dealer.");

  const handleSelect = (selectedIndex) => {
    setCurrentTitle(projects[selectedIndex].title);
    switch (selectedIndex) {
      case '0':
        setCurrentDescription("A simple and fun blackjack game built with HTML, CSS, and JavaScript. The game allows users to test their luck by increase/decrease their bet and playing multiple rounds of blackjack against a dealer.");
        break;
      case '1':
        setCurrentDescription("Anidex is an anime progress tracking app that allows you to keep track of and maintain an updated list of your animes. Gone are the dreadful days of forgetting which season and episode you left off at, and no more notepad files and excel spreadsheets! Anidex grants you access to your list from any internet-connected device. Within your list is an overview of the name of an anime and its completion status. Additionally, you are able to view specific details about an anime in your list such as the studio, current episode, current season, and release year. Your list is yours to command! Edit specific details and/or delete animes and notes you no longer wish to keep. Never forget your anime progress again!");
        break;
      case '2':
        setCurrentDescription("NEED is your all-inclusive online marketplace built with the goal of answering to any and every need. Our motto is \"You Need? We Got.\", a testament to our dedication in providing a platform where you can find virtually anything, from little knick-knacks to the most essential doodads. Don't be surprised if you find a Thing-a-majig!");
        break;
      case '3':
        setCurrentDescription("This Fitness Tracker App aims to provide users with a seamless experience for creating and managing their workout routines. After logging in, users will land on a dashboard that displays a weekly schedule with the muscle groups targeted each day. Users can add or edit workout routines for each day, with each routine consisting of specific exercises pulled from the wger API. Users can also log their personal records for each exercise and automatically track improvements over time. Additional features include automatic updating of personal records and restrictions on assigning the same day to multiple routines.");
        break;
      default:
        setCurrentDescription("");
        break;
    }
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2>{currentTitle}</h2>
                  <p>{currentDescription}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="0" onSelect={handleSelect}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {
                        projects.map((project, index) => (
                          <Nav.Item key={index}>
                            <Nav.Link eventKey={index}>{project.title}</Nav.Link>
                          </Nav.Item>
                        ))
                      }
                    </Nav>
                    <Tab.Content id="slideInUp">
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