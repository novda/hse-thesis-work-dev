import { MainPage } from "./components/MainPage";
import { RecommendationPage } from "./components/RecommendationPage";
import { RecommendationPageLiverpool } from "./components/RecommendationPageLiverpool";
import { RecommendationPageJolie } from "./components/RecommendationPageJolie";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link
            to={{
              pathname: "/",
            }}
          >
            <Navbar.Brand className="navbar-title">Home</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path={""} element={<MainPage />} />
        <Route path={"recommends"} element={<RecommendationPage />} />
        <Route path={"recommends2"} element={<RecommendationPageLiverpool />} />
        <Route path={"recommends3"} element={<RecommendationPageJolie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
