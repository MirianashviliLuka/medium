import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MoreStories(){
    return (
      <>
       <Container style={{ marginBottom: '1rem' }}>
            <Row>
                <Col> Interested? <a href="stories">Get more stories</a></Col>
            </Row>
        </Container>
      </>
    );
};

export default MoreStories;