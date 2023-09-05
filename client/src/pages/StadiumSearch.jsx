import React, { useState } from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import EventComponent from '../components/Events'; 

export default function StadiumSearch() {
    const [eventName, setEventName] = useState(""); 
    const [searched, setSearched] = useState(false); 

    const handleSearch = () => {
        setSearched(true);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Stadium Search</h1>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter event or team name"
                            aria-label="Enter event or team name"
                            aria-describedby="basic-addon2"
                            onChange={(e) => setEventName(e.target.value)}
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                            Search
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            {searched && (
                <Row>
                    <Col>
                        <EventComponent eventName={eventName} />
                    </Col>
                </Row>
            )}
        </Container>
    );
}
