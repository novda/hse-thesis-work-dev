import {
  Card,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./RecommendationPage.scss";
import twitter_icon from "./icons/twitter_blue.png";
import fb_icon from "./icons/fb_icon.png";
import reddit_icon from "./icons/reddit.png";
import { PostSingle } from "./PostSingle";

const data = [
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "twitter",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
  {
    user: "Tomas Tuxel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Yurgen Klopp",
    text: "Time to make life multiplanetary",
    source: "facebook",
  },
];

export function RecommendationPage() {
  return (
    <Container className="rec-page-container">
      <Row>
        <Col className="rec-header">
          <h1>Recommend posts</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <h3>From users</h3>
          <Card className="from-users">
            <Card.Header>
              <img alt="twitter" src={twitter_icon} /> Twitter
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>@hello</ListGroup.Item>
              <ListGroup.Item>@locally</ListGroup.Item>
              <ListGroup.Item>@roasted</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="reddit" src={reddit_icon} /> Reddit
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Petya Petrov</ListGroup.Item>
              <ListGroup.Item>Frank Lampard</ListGroup.Item>
              <ListGroup.Item>Tomas Tuxel</ListGroup.Item>
              <ListGroup.Item>Yurgen Klopp</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="facebook" src={fb_icon} /> Facebook
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Petya Petrov</ListGroup.Item>
              <ListGroup.Item>Frank Lampard</ListGroup.Item>
              <ListGroup.Item>Tomas Tuxel</ListGroup.Item>
              <ListGroup.Item>Yurgen Klopp</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col className="feed">
          {data.map((post) => (
            <PostSingle key={post.user} {...post} />
          ))}
        </Col>
        <Col xs={3}>
          <Card className="news-title">
            <Card.Body>
              <Card.Title>Elon Musk to buy Twitter</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                theverge.com
              </Card.Subtitle>
              <Card.Text>
                Elon Musk announced an offer to buy Twitter for $54.20 a share.
                On April 25th, Twitter accepted the deal.
              </Card.Text>
              <Card.Link href="#">Go to news</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
