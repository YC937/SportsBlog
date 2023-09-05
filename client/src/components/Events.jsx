import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { GET_EVENT } from '../utils/queries';

function EventComponent({ eventName }) {
    const { loading, error, data } = useQuery(GET_EVENT, {
        variables: { eventName },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const event = data.event;

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Header as="h5">{event.strEvent}</Card.Header>
                        <Card.Body>
                            <Card.Title>Date: {event.dateEvent}</Card.Title>
                            <Card.Text>
                                Time: {event.strTime}
                            </Card.Text>
                            <Button variant="primary">Go to Event</Button> 
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default EventComponent;
