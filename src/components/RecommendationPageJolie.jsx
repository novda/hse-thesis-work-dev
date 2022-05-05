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
    user: "Oleksandra Matviichuk",
    login: "@avalaina",
    text: `My respect to Angelina Jolie 🇺🇦\n"Angelina Jolie is travelling to Ukraine in her personal capacity and UNHCR has no involvement in this visit," UN spokesperson Matt Saltmarsh said in an email statement.\n#StandWithUkraine \nPhoto Volodymyr Lys`,
    source: "twitter",
  },
  {
    user: "Holly ✌️😗|Property of Angie",
    login: "@angelinasweave",
    text: "Angelina Jolie is the most purest soul, with the most genuine empathy for others I think I have ever seen in a person, keep doing what you’re doing Angie 💗",
    source: "twitter",
  },
  {
    user: "Prachi Yadav",
    login: "@Prachi2505",
    text: "Angelina Jolie's heart melting pictures & videos while interacting with children injured in an alleged Russian missile attack in Lviv city, conveys a beautiful message that the voice of Ukrainians does matter and should be heard. They need healing power & us",
    source: "twitter",
  },
  {
    user: "bektour",
    login: "u/bektour",
    text: "Angelina Jolie is in Lviv, Ukraine. But I really love that kid in headphones who does not care about it.",
    source: "reddit",
  },
  {
    user: "Catworldullus",
    login: "u/Catworldullus",
    text: `Since y’all are gonna shit on her without even reading about her past:
    \r\n• Jolie first witnessed the effects of a humanitarian crisis while filming Lara Croft: Tomb Raider (2001) in war-torn Cambodia. Jolie contacted the United Nations High Commissioner for Refugees (UNHCR) for information on international trouble spots. To learn more about the conditions in these areas, she began visiting refugee camps around the world.
    \n• to address crisis of Afghan refugees in Pakistan, where she donated $1 million in response to an international UNHCR emergency appeal. She covered all costs related to her missions and shared the same rudimentary working and living conditions as UNHCR field staff on all of her visits.
    \n• Jolie was named a UNHCR Goodwill Ambassador at UNHCR headquarters in Geneva on August 27, 2001.
    \n• Over the next decade, she went on more than 40 field missions, meeting with refugees and internally displaced persons in over 30 countries.
    \n• She became noted for traveling to war zones, such as Sudan's Darfur region during the Darfur conflict, the Syrian-Iraqi border during the Second Gulf War, where she met privately with U.S. troops and other multi-national forces, and the Afghan capital Kabul during the war in Afghanistan, where three aid workers were murdered in the midst of her first visit.
    \n• To aid her travels, she began taking flying lessons in 2004 with the aim of ferrying aid workers and food supplies around the world; she now holds a private pilot license with instrument rating and owns a Cirrus SR22 and Cessna 208 Caravan single-engine aircraft.
    \n• Traveled to Ecuador, where she met with Colombian refugees, and she accompanied Guterres on a week-long tour of Jordan, Lebanon, Turkey, and Iraq, to assess the situation of refugees from neighboring Syria.
    \n• In an effort to connect her Cambodian-born adopted son with his heritage, Jolie purchased the park's 60,000 hectares and turned the area into a wildlife reserve named for her son, the Maddox Jolie Project. This helped end poaching and remove left over mines from the landscape.
    \n• In 2006, Jolie expanded the scope of the project to create Asia's first Millennium Village, in accordance with UN development goals.By mid-2007, some 6,000 villagers and 72 employees—some of them former poachers employed as rangers—lived and worked at MJP, in ten villages previously isolated from one another. The compound includes schools, roads, and a soy milk factory, all funded by Jolie.
    \n• In name of their Namibian-born daughter, they have funded large-animal conservation projects as well as a free health clinic, housing, and a school for the San Bushmen community at Naankuse.
    \n• Jolie has pushed for legislation to aid child immigrants and other vulnerable children in both the U.S. and developing nations, including the "Unaccompanied Alien Child Protection Act of 2005."
    \n• Since October 2008, she has co-chaired Kids in Need of Defense (KIND), a network of leading U.S. law firms that provide free legal aid to unaccompanied minors in immigration proceedings across the U.S.
    \n• Jolie advocates for an end to child marriage, for children's education. Since 2007, she has co-chaired the Education Partnership for Children of Conflict, which provides policy and funding to education programs for children in conflict-affected regions. In its first year, the partnership supported education projects for Iraqi refugee children, youth affected by the Darfur conflict, and girls in rural Afghanistan, among other affected groups. Since April 2013, all proceeds from Jolie's high-end jewelry collection, Style of Jolie, have benefited the partnership's work.    \n• Jolie additionally launched the Malala Fund, a grant system established by Pakistani education activist Malala Yousafzai, at the 2013 Women in the World Summit; she personally contributed over $200,000 to the cause.
    \n• Jolie has funded a school and boarding facility for girls at Kakuma refugee camp in northwestern Kenya, and two primary schools for girls in the returnee settlements Tangi and Qalai Gudar in eastern Afghanistan.
    \n• In addition to the facilities at the Millennium Village she established in Cambodia, Jolie had built at least ten other schools in the country by 2005.
    \n• In February 2006, she opened the Maddox Chivan Children's Center, a medical and educational facility for children affected by HIV, in the Cambodian capital Phnom Penh.
    \n• In Sebeta, Ethiopia, the birthplace of her eldest daughter, she funds a sister facility, the Zahara Children's Center, to treat and educate children suffering from HIV or tuberculosis. Both centers are run by the Global Health Committee.
    \n• Jolie is executive producer of the BBC program My World which aims to teach teenagers how to think critically about what they read and how to tell high-quality journalism from bad.
    \n• In January 2011, she established the Jolie Legal Fellowship, a network of lawyers and attorneys who are sponsored to advocate the development of human rights in their countries. Its member attorneys have facilitated child protection efforts in Haiti in the wake of the 2010 earthquake and promoted the development of an inclusive democratic process in Libya following the 2011 revolution.
    \n• Jolie has fronted a campaign against sexual violence in military conflict zones by the UK government, which made the issue a priority of its 2013 G8 presidency.
    \n• In May 2012, she launched the Preventing Sexual Violence Initiative (PSVI) with Foreign Secretary William Hague. Jolie spoke on the subject at the G8 foreign ministers meeting, where the attending nations adopted a historic declaration, and before the UN security council, which responded by adopting its broadest resolution on the issue to date.
    \n• In June 2014, she co-chaired the four-day Global Summit to End Sexual Violence in Conflict, the largest-ever meeting on the subject,which resulted in a protocol endorsed by 151 nations.
    \n• On September 9, 2020, Jolie made a generous donation to two young boys, who were running a lemonade stand in London. The boys were raising money through the stall for the people of Yemen, as the country was on the brink of humanitarian crisis caused by the Saudi-led coalition and Houthi rebels.`,
    source: "reddit",
  },
  {
    user: "Insider",
    login: "Insider",
    text: `"I just went to have a coffee and it's only Angelina Jolie," said`,
    source: "facebook",
  },
  {
    user: "Aaron Krasinsky",
    login: "krasinskiy_a",
    text: `Hollywood actress and U.N. humanitarian Angelina Jolie made a surprise visit to the western Ukrainian city of Lviv on Saturday, the Lviv regional governor said on Telegram. According to Maksym Kozytskyy, Jolie — who has been a UNHCR Special Envoy for Refugees since 2011 — had come to speak with displaced people who have found refuge in Lviv, including children undergoing treatment for injuries sustained in the missile strike on the Kramatorsk railway station in early April.`,
    source: "facebook",
  },
  {
    user: "Shafi Shafi",
    text: `If you want to join Angela white messanger group then request and inbox me`,
    source: "facebook",
  },
];

export function RecommendationPageJolie() {
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
              <ListGroup.Item>@avalaina</ListGroup.Item>
              <ListGroup.Item>@angelinasweave</ListGroup.Item>
              <ListGroup.Item>@Prachi2505</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="reddit" src={reddit_icon} /> Reddit
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>u/bektour</ListGroup.Item>
              <ListGroup.Item>u/Catworldullus</ListGroup.Item>
            </ListGroup>
            <Card.Header>
              <img alt="facebook" src={fb_icon} /> Facebook
            </Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Insider</ListGroup.Item>
              <ListGroup.Item>Aaron Krasinsky</ListGroup.Item>
              <ListGroup.Item>Shafi Shafi </ListGroup.Item>
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
              <Card.Title>
                Angelina Jolie makes surprise visit to Ukraine
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                theguardian.com
              </Card.Subtitle>
              <Card.Text>
                Hollywood actor and UN envoy met refugees in the western city of
                Lviv on Saturday, its regional governor said
              </Card.Text>
              <Card.Link href="https://www.theguardian.com/world/2022/apr/30/angelina-jolie-makes-surprise-visit-to-ukraine">
                Go to news
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
