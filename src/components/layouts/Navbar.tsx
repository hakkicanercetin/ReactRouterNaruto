import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export function MyNavbar(){
    return (
      <Navbar className="bg-body-tertiary">
        <Container className="d-block">
          <Link to="/" className="d-flex justify-content-center align-items-center text-black text-decoration-none">
                <img
                alt=""
                src="./naruto-bg.png"
                width="100"
                height="100"
                className="d-inline-block"
                />{' '}
                <h1 style={{fontSize:"2rem"}}>Fan Page</h1>
            </Link>
        </Container>
      </Navbar>
    )
}