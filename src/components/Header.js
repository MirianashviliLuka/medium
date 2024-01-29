import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function Header(){
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Luka Makharadze blog</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Button href="new" variant="secondary">გამოქვეყნება</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;