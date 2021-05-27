import React from 'react';
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap';

export const ProductGridItem = ( {title, description, price, stock, url} ) => {

    return (
        <Container fluid>
            <CardGroup className="m-2 d-block">
                <Card className="m-2 border-0">
                    <Row>
                        <Col xs={12}>
                            <Card.Img variant="top" src={url} alt={title} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                {/* <Card.Text>Stock: {stock}</Card.Text> */}
                                <Card.Text>S/. {price}</Card.Text>
                                <Button variant="primary">Añadir a carrito</Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </CardGroup>
        </Container>
    )
}