import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StoryListItem from './StoryListItem';

function StoryList({stories}){
    return <>
        <Container style={{ marginTop: '1rem' }}>
            {stories.map((story) => {
                return (
                    <Row key={story[0].id.toString() + ' ' + story[1].id.toString()} style={{ marginBottom: '1rem' }}>
                        <Col><StoryListItem story={story[0]}/></Col>
                        <Col><StoryListItem story={story[1]}/></Col>
                    </Row>
                )
            })}     
        </Container>
    </>;
};

export default StoryList;