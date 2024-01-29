import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function StoryListItem({story}){
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{story.name}</Card.Title>
                    <Link to={'story/'+story.id}>View</Link>
                </Card.Body>
            </Card>
        </>
    );
};

export default StoryListItem;