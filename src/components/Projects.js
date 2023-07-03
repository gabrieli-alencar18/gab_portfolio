import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState, useEffect } from 'react';

export const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>sobre mim</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">MEU CURSO</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">API produtos makeup</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Bem vindo ao meu portifólio em desenvolvimento! 
                          me chamo Gabrieli, atualmente tenho 18 anos e estou no 1° semestre de Análise e Desenvolvimento de Sistemas
                          no Centro Universitário
                           Unifasipe Sinop.
                        </p>
                        <div className="adsphoto">
                        <img src="https://www.ft.unicamp.br/sites/default/files/tads.jpg" alt="foto dos alunos de ADS-2023"/>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {data.length === 0 ? (
                          <p>Carregando...</p>
                        ) : (
                          data.map((item) => (
                            <p key={item.id}>{item.name}</p>
                          ))
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
