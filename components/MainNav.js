import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  function submitForm(e) {
    e.preventDefault(); // prevent the browser from automatically submitting the form
    router.push(`/artwork?title=true&q=${searchField}`);
  }

  function toggleIsExpanded() {
    setIsExpanded(!isExpanded);
  }

  function closeNavBar() {
    setIsExpanded(false);
  }

  return (
    <>
      <Navbar
        bg="info"
        expand="lg"
        expanded={isExpanded}
        className="fixed-top navbar-dark bg-dark"
      >
        <Container>
          <Navbar.Brand>THE MET</Navbar.Brand>
          <Navbar.Toggle
            onClick={toggleIsExpanded}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link
                  onClick={closeNavBar}
                  active={router.pathname === "/"}
                >
                  Home
                </Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link
                  onClick={closeNavBar}
                  active={router.pathname === "/search"}
                >
                  Advanced Search
                </Nav.Link>
              </Link>
              <NavDropdown title="Artworks Highlight" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={closeNavBar}
                  active={router.pathname === "/theBuddha"}
                  href="/theBuddha"
                >
                  The Buddha
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={closeNavBar}
                  active={router.pathname === "/theZenMaster"}
                  href="/theZenMaster"
                >
                  Zen Master
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={closeNavBar}
                  active={router.pathname === "/monet"}
                  href="/monet"
                >
                  Monet
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={closeNavBar}
                  active={router.pathname === "/mountFuji"}
                  href="/mountFuji"
                >
                  Mt. Fuji
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" onSubmit={submitForm}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
              />
              <Button type="submit" className="button-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
