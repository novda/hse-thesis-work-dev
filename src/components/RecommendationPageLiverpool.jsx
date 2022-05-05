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
import { useEffect, useState } from "react";
import LoadingSpinner from "./spinner";

const data = [
  {
    user: "Jogoo la Shamba Mjini",
    login: "@JMariotz",
    text: "Hahahaha yes boss alifanya majukumu yake vyema too bad in 2nd half Liverpool did show us why they are the best team in the world right now.",
    source: "twitter",
  },
  {
    user: "Shen",
    login: "@Shen64847662",
    text: "First of all I will change their mentality, they lack winning mentality they should learn that then teach them that every game is like a final if you want to win the league you must approach each games like no other, that is how the likes of Liverpool and man city played",
    source: "twitter",
  },
  {
    user: "rahman",
    login: "@rahmanisback",
    text: "Liverpool Liverpool Liverpool ♥️♥️♥️ 💪🏻💪🏻💪🏻",
    source: "twitter",
  },
  {
    user: "Napoleon Bonaparte",
    login: "@TumsahtheGreat",
    text: "They probably would but my money is on Madrid winning that tie. Besides that Liverpool are just too good of a team, they’ve been the best team in the UCL for me this season hands down.",
    source: "twitter",
  },
  {
    user: "Max",
    login: "KingdomMaxLTE",
    text: `When we have grown up like this tweeting absolute crap through bitterness over a clubs he’s never visited, you can’t complain about society dying. If Liverpool have spent 700m, Man City have spent 1.7bn.`,
    source: "twitter",
  },
  {
    user: "Sifo",
    login: "u/Chiefo420TV",
    text: "Unai Emery had all the momentum in the world and decided to play back and hold the result this was the decision that costed Villareal the game Luis Diaz was phenomenal btw",
    source: "reddit",
  },
  {
    user: "RushPan93",
    login: "u/RushPan93",
    text: "Why? Villareal's first half is not the way City press, they man marked us. There's no similarity here really so no relevance to how it will be when we play City.",
    source: "reddit",
  },
  {
    user: "Nick Elliott",
    login: "nickelliottDT",
    text: `Liverpool's relentlessness and intensity summed up by Andy Robertson in stoppage time there. He opts for a slide tackle in his own box, knowing that if he gets it wrong it could lead to a penalty for Newcastle that might end the title race, executes it perfectly and then dribbles the ball up field at pace to launch a counterattack. Incredible fitness levels`,
    source: "facebook",
  },
];

export function RecommendationPageLiverpool() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("LOADING...");
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
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
              <ListGroup.Item>@JMariotz</ListGroup.Item>
              <ListGroup.Item>@Shen64847662</ListGroup.Item>
              <ListGroup.Item>@rahmanisback</ListGroup.Item>
              <ListGroup.Item>@TumsahtheGreat</ListGroup.Item>
              <ListGroup.Item>@KingdomMaxLTE</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="reddit" src={reddit_icon} /> Reddit
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>u/Chiefo420TV</ListGroup.Item>
              <ListGroup.Item>u/RushPan93</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="facebook" src={fb_icon} /> Facebook
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Jurgen Klopp</ListGroup.Item>
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
              <Card.Title>Liverpool in CHL final</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                skysports.com
              </Card.Subtitle>
              <Card.Text>
                Liverpool overcame Villarreal to book a third Champions League
                final in five seasons with a 3-2 victory at El Madrigal on
                Tuesday night.
              </Card.Text>
              <Card.Link href="https://www.skysports.com/football/villarreal-vs-liverpool/report/463261">
                Go to news
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
