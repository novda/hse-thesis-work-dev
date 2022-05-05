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
import inst_icon from "./icons/instagram_icon.png";

export function MainPage() {
  return (
    <Container className="main-page">
      <Row>
        <Col className="left-sidebar" xs={4}>
          <Card className="left-card">
            <Card.Header>Social accounts</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="social-item">
                  <img alt="twitter" src={twitter_icon} /> @SLAVASLAVA
                </ListGroup.Item>
                <ListGroup.Item className="social-item">
                  <img alt="facebook" src={fb_icon} /> Vyacheslav Skuratov
                </ListGroup.Item>
                <ListGroup.Item className="social-item">
                  <img alt="reddit" src={reddit_icon} /> Skuratov
                </ListGroup.Item>
                <ListGroup.Item className="social-item">
                  <img alt="instagram" src={inst_icon} /> Instagram{" "}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="click-to-connect"
                    rel="noreferrer"
                  >
                    (Click to connect)
                  </a>
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
                  Get posts
                </Button>
              </Link>
            </InputGroup>
          </Row>
          <Row className="popular-news">
            <h2>Popular News</h2>
            <Card style={{ width: "18rem" }} className="popular-news-card">
              <Card.Img
                variant="top"
                style={{ height: 200 }}
                src="https://cdn.vox-cdn.com/thumbor/KuzjMVXifCRKNwfPELFqVSv-ELU=/0x0:2040x1360/1920x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23382328/VRG_Illo_STK022_K_Radtke_Musk_Twitter_Shrug.jpg"
              />
              <Card.Body>
                <Card.Title>Elon Musk to buy Twitter</Card.Title>
                <Card.Text>
                  Today Elon Musk announced a huge offer to buy Twitter for
                  $54.20 a share. On April 25th, Twitter successfully accepted
                  the deal. 🚀🔥🔥🔥
                </Card.Text>
                <Link
                  to={{
                    pathname: "/recommends",
                  }}
                >
                  <Button variant="info">Get posts</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="popular-news-card">
              <Card.Img
                style={{ height: 200 }}
                variant="top"
                src="https://img.asmedia.epimg.net/resizer/CQ7UEudDmCpJITH-4e_bvW2yYXg=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/BJGPXJEJPNAU7LNY3GIWLREAZI.png"
              />
              <Card.Body>
                <Card.Title>Liverpool in CHL final</Card.Title>
                <Card.Text>
                  Liverpool overcame Villarreal to book a third Champions League
                  final in five seasons with a 3-2 victory at El Madrigal on
                  Tuesday night.
                </Card.Text>
                <Link
                  to={{
                    pathname: "/recommends2",
                  }}
                >
                  <Button variant="info">Get posts</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }} className="popular-news-card">
              <Card.Img
                variant="top"
                style={{ height: 200 }}
                src="https://i.guim.co.uk/img/media/e38e804524d38d79a4bd4c46a134af17dde132e3/219_0_3281_1969/master/3281.jpg?width=620&quality=85&auto=format&fit=max&s=dfb818a8957dc1a5f91ee518332975f2"
              />
              <Card.Body>
                <Card.Title>
                  Angelina Jolie makes surprise visit to Ukraine
                </Card.Title>
                <Card.Text>
                  Hollywood actor and UN envoy met refugees in the western city
                  of Lviv on Saturday, its regional governor said
                </Card.Text>
                <Link
                  to={{
                    pathname: "/recommends3",
                  }}
                >
                <Button variant="info">Get posts</Button>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <div className="right-sidebar"></div>
      </Row>
    </Container>
  );
}
