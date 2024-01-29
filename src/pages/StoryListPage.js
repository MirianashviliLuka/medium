import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import StoryItem from '../components/StoryItem';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function StoryListPage(){
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(1);
    const [pageSize] = useState(5);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/stories`)
            .then(response => response.json())
            .then(json => {
                setStories(json);
                setCount(json.length);
            })
            .catch(error => console.error(error));
        }, []);



    const getPageCount = (count, pageSize) => {
        if(count % pageSize == 0){
            return Math.floor(count / pageSize);
        }

        return Math.floor(count / pageSize) + 1;
    }

    const onPageChange = (page) => {
        setPage(page)
    }

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        { stories.slice(page*pageSize, (page+1)*pageSize).map(story => <StoryItem key={story.id} story={story}/>) }
                    </Col>
                </Row>
                <Row style={{ marginTop: '1rem' }}>
                    <Col>
                        <ButtonGroup aria-label="Basic example">
                            {[...Array(getPageCount(count,pageSize)).keys()].map(pageItem => <Button variant="success" active={page == pageItem} onClick={() => onPageChange(pageItem)}>{pageItem+1}</Button>)}
                        </ButtonGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StoryListPage;