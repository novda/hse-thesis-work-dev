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
    user: "BOB",
    login: "@Unbr0kenOG",
    text: "So Elon Musk will be the temporary CEO of Twitter once the deal is done.\nSomething huge is coming.",
    source: "twitter",
  },
  {
    user: "M🍩RTEN",
    login: "@mortenpx",
    text: "I think that @TweetDeck\nis a really undervalued product.\nBut it needs to be an iOS app and include Twitter analytics as well.\n@elonmusk?",
    source: "twitter",
  },
  {
    user: "Chrisleo",
    login: "@ChrisLeopizzi",
    text: "He doesn’t own it yet deal hasn’t closed duh",
    source: "twitter",
  },
  {
    user: "alexthekidd01",
    login: "u/alexthekidd01",
    text: "FORTY FIVE BILLION, jesus... well I guess I'm rich in spirit at least",
    source: "reddit",
  },
  {
    user: "JohnnyLibRight",
    login: "u/JohnnyLibRight",
    text: "Twitter has accepted Elon Musk’s offer to purchase the company for $44 billion, the company announced in a press release today. Musk purchased the company at $54.20 a share, the same price named in his initial offer on April 14th.",
    source: "reddit",
  },
  {
    user: "theFrankSpot",
    login: "u/theFrankSpot",
    text: "Oh look. One of 2022’s Bond villains is going to decide what constitutes free speech on an important platform.\nAnyone want to help me start a new company for all the users who flee Twitter to use?",
    source: "reddit",
  },
  {
    user: "ThomasTuchel",
    login: "u/ThomasTuchel",
    text: "There is so much potential with Twitter to be the most trusted & broadly inclusive forum in the world!",
    source: "reddit",
  },
  {
    user: "Jurgen Klopp",
    login: "jurgen_k",
    text: `Bluesky is a Twitter-backed project to "develop an open and decentralized standard for social media." says it is an independent company.
Back in late 2019, when Jack Dorsey was still CEO of Twitter, he set in motion a plan to "develop an open and decentralized standard for social media" that would explore elements of crypto and Web3.
That effort, which came to be called "bluesky," gained steam in 2021 with a January "ecosystem review" of decentralized social apps and the August appointment of Zcash veteran developer Jay Graber as its lead.
Today, bluesky took to Twitter—the platform soon to be privately owned by mega-billionaire Elon Musk—to clarify that it's independent of the social media site and has been a public benefit limited liability company since February.
"The 'public benefit' part of our structure gives us the freedom to put our resources towards our mission without an obligation to return money to shareholders," it tweeted. "The company is owned by the team itself, without any controlling stake held by Twitter."
Given the surge of interest in Twitter's future, we thought this would be a good time to clarify the relationship between Bluesky and Twitter.
According to bluesky, where Dorsey remains a board member, it has $13 million in funding "to ensure we have the freedom and independence to get started on R&D."
In other words, it's somewhat beyond Musk's reach, even though the Tesla CEO just paid $44 billion for Twitter and has plans to improve it—from removing spam and minimizing content moderation to potentially introducing crypto payments.
Bluesky has taken inspiration from a number of crypto projects, including IPFS—a protocol that allows for peer-to-peer file sharing—to the Basic Attention Token that incentivizes Brave browser readers to watch ads.
Dorsey, however, is a Bitcoin maximalist. Now focused solely on leading payments company Block.
By contrast, Musk, though he cozied up to Bitcoin when Tesla bought $1.5 billion in BTC for its books, is more enamored of Dogecoin. He's been working with that blockchain's part-time developers to make it into a payment network that surpasses Bitcoin.
#payments #blockchain#Payments`,
    source: "facebook",
  },
  {
    user: "Mona Salama",
    login: "bymonasalama",
    text: `Elon Musk has secured $7.14 billion from 19 backers for his proposed acquisition of Twitter
Among the backers listed on the SEC filing are Oracle co-founder Larry Ellison is investing $1B, cryptocurrency exchange Binance is contributing $500 million
Saudi Arabia Prince Alwaleed Bin Talal, a current Twitter investor committed to buy 34,948,975 shares, worth ~$1.7 billion
Securing $7B in new financing commitment, Musk cuts his $12.5B mar­gin loan by half to $6.25B & increased his equity commitment for the takeover to $27.25B`,
    source: "facebook",
  },
];

export function RecommendationPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log("LOADING...");
      setIsLoading(false);
    }, 1500);
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
              <ListGroup.Item>@Unbr0kenOG</ListGroup.Item>
              <ListGroup.Item>@mortenpx</ListGroup.Item>
              <ListGroup.Item>@ChrisLeopizzi</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="reddit" src={reddit_icon} /> Reddit
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>u/alexthekidd01</ListGroup.Item>
              <ListGroup.Item>u/JohnnyLibRight</ListGroup.Item>
              <ListGroup.Item>u/theFrankSpot</ListGroup.Item>
              <ListGroup.Item>u/ThomasTuchel</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="facebook" src={fb_icon} /> Facebook
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Jurgen Klopp</ListGroup.Item>
              <ListGroup.Item>Mona Salama</ListGroup.Item>
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
                Today Elon Musk announced a huge offer to buy Twitter for $54.20
                a share. On April 25th, Twitter successfully accepted the deal.
              </Card.Text>
              <Card.Link href="https://www.theverge.com/23026874/elon-musk-twitter-buyout-news-updates">
                Go to news
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
