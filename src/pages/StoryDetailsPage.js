import { useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../components/Header';
import { Link } from "react-router-dom";

const style = { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' };


function StoryDetailsPage(){
    const { id } = useParams();
    const [story, setStory] = useState();
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        fetch(`http://localhost:3000/stories?id=${id}`)
          .then(response => response.json())
          .then(json => {
            setStory(json[0])
            setIsLoading(false)
          })
          .catch(error => console.error(error));
      }, []);

    const renderLoadingSpinner = () => {
        return (<div style={style}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>);
    }

    const renderStory = () => {
        return (<>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h1>{story.name}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{story.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={'/'}>Go Stories</Link>
                    </Col>
                </Row>
            </Container>
        </>);
    }

    return (<>
        { isLoading ? renderLoadingSpinner() : renderStory() } 
    </>);
};

export default StoryDetailsPage;