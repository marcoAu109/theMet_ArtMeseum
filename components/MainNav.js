import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MainNav() {
  const [searchField, setSearchField] = useState("");
  const router = useRouter();

  function submitForm(e) {
    e.preventDefault(); // prevent the browser from automatically submitting the form
    // console.log(`form submitted - userName: ${searchField}`);// test only
    router.push(`/artwork?title=true&q=${searchField}`);
  }
  return (
    <>
      <Navbar bg="info" expand="lg" className="fixed-top navbar-dark bg-dark">
        <Container>
          <Navbar.Brand>THE MET</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/search" passHref legacyBehavior>
                <Nav.Link>Advanced Search</Nav.Link>
              </Link>
              <NavDropdown title="Artworks Highlight" id="basic-nav-dropdown">
                <NavDropdown.Item href="/theBuddha">The Buddha</NavDropdown.Item>
                <NavDropdown.Item href="/theZenMaster">
                  Zen Master
                </NavDropdown.Item>
                <NavDropdown.Item href="/monet">
                  Monet
                </NavDropdown.Item>
                <NavDropdown.Item href="/mountFuji">
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
