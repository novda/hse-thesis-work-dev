import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Col,
  Row,
  Container,
} from "react-bootstrap";
import "./MainPage.scss";
import twitter_icon from "./icons/twitter_blue.png";
import fb_icon from "./icons/fb_icon.png";
import reddit_icon from "./icons/reddit.png";

export function MainPage() {
  return (
    <Container className="main-page">
      <Row>
        <Col className="left-sidebar" xs={4}>
          <Card className="left-card">
            <Card.Header>Social accounts</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <img alt="twitter" src={twitter_icon} /> @SLAVASLAVA
                </ListGroup.Item>
                <ListGroup.Item className="to-connect">
                  <img alt="twitter" src={fb_icon} /> Facebook
                </ListGroup.Item>
                <ListGroup.Item className="to-connect">
                  <img alt="twitter" src={reddit_icon} /> Reddit
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col className="main" xs={8}>
          <Row>
            <h2>Paste link to news for recommendation</h2>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Link to News"
                aria-label="Link to News"
                aria-describedby="basic-addon2"
              />
              <Link
                to={{
                  pathname: "/recommends",
                }}
              >
                <Button
                  type="button"
                  className="btn btn-primary"
                  id="button-addon2"
                >
                  GO!
                </Button>
              </Link>
            </InputGroup>
          </Row>
          <Row className="popular-news">
            <h2>Popular News</h2>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn.vox-cdn.com/thumbor/KuzjMVXifCRKNwfPELFqVSv-ELU=/0x0:2040x1360/1920x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23382328/VRG_Illo_STK022_K_Radtke_Musk_Twitter_Shrug.jpg"
              />
              <Card.Body>
                <Card.Title>Elon Musk to buy Twitter</Card.Title>
                <Card.Text>
                  Elon Musk announced an offer to buy Twitter for $54.20 a
                  share. On April 25th, Twitter accepted the deal.
                </Card.Text>
                <Button variant="info">Get posts</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <div className="right-sidebar"></div>
      </Row>
    </Container>
  );
}
