import { Card } from "react-bootstrap";
import "./PostSingle.scss";
import twitter_word from "./icons/twitter_word.png";
import fb_word from "./icons/fb_word.png";
import reddit_word from "./icons/reddit_1.png";

export function PostSingle({ user, text, source }) {
  let source_network = null;

  if (source === "twitter") {
    source_network = twitter_word;
  } else if (source === "facebook") {
    source_network = fb_word;
  } else if (source === "reddit") {
    source_network = reddit_word;
  }

  return (
    <Card className="post">
      <Card.Body>
        <Card.Title>{user}</Card.Title>
        {text}
      </Card.Body>
        <img alt={source} src={source_network} className="icon"/>
    </Card>
  );
}
