import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
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
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>With a diverse set of skills leveraging full-stack methodologies, I'm prepared to tackle a wide range of challenges.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>JavaScript Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>React Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='Image' />
                                    <h5>Python Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>Data Analysis</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='Image' />
                                    <h5>API Development & Integration</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='Image' />
                                    <h5>Database Management (SQL/NoSQL)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>Version Control (Git)</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='Image' />
                                    <h5>Test-Driven Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='Image' />
                                    <h5>Agile Methodologies</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt='Image' />
                                    <h5>Problem Solving</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='Image' />
                                    <h5>Communication</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
};

/* <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>; */
