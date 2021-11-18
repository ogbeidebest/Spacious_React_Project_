import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const NarBar = () => {
    return (< Navbar expand="lg"
        variant="light" >
        <Container >
            <Navbar.Brand className=" text-capitalize pt-5" href="#" > <Link to="/" className="navsd">spacious </Link></Navbar.Brand>
        </Container > </Navbar>
    );
}

export default NarBar;