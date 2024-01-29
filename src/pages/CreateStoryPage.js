import Container from 'react-bootstrap/esm/Container';
import Header from '../components/Header';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Link } from "react-router-dom";

function CreateStoryPage(){
	const [name, setName] = useState('');
	const [description, setDesctiption] = useState('');
	const [id, setId] = useState(0);
	const [showMessage, setShowMessage] = useState(false);

	const onChangeName = (e) => {
		setName(e.target.value);
	}

	const onChangeDesctiption = (e) => {
		setDesctiption(e.target.value);
	}

	const onSaveStory = (e) => {
		e.preventDefault();

		const id = Math.ceil(Math.random() * 100000000);
		setId(id)

		const data = {
			'id': id,
			'name': name,
			'desctiption': description
		};

		fetch('http://localhost:3000/stories',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then(response => {
			setShowMessage(true);
			resetForm();
		})
	}

	const resetForm = () => {
		setName('');
		setDesctiption('');
	}

    return (<>
        <Header />
        <Container style={{ marginTop: '1.5rem' }}>
            <Row>
				<Alert variant="success" show={showMessage}>
          			Your news was published! <Link to={'/story/'+ id}>View my Story</Link>
        		</Alert>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>Story Name</Form.Label>
						<Form.Control type="email" placeholder="story name" value={name} onChange={e => onChangeName(e)}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Story Description</Form.Label>
						<Form.Control as="textarea" rows={10} value={description} onChange={e => onChangeDesctiption(e)}/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Button variant="primary" onClick={e => onSaveStory(e)}>Publish</Button>&nbsp;
						<Button variant="danger" onClick={e => resetForm()}>Reset</Button>
					</Form.Group>
				</Form>
            </Row>
        </Container>
    </>)
};

export default CreateStoryPage;