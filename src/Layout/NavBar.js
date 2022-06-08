import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <FontAwesomeIcon icon={faPlaneCircleExclamation} size="2x" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/icn">인천 공항</Nav.Link>
              <Nav.Link href="/map">공항 위치</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default NavBar;
