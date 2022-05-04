import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import "./MainPage.scss";
import twitter_icon from "./icons/twitter_blue.png";
import fb_icon from "./icons/fb_icon.png";
import reddit_icon from "./icons/reddit.png";

export function MainPage() {
  return (
    <div className="MainPage">
      <div className="left-sidebar">
        <Card>
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
      </div>
      <main className="main">
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
      </main>
      <div className="right-sidebar"></div>
    </div>
  );
}
