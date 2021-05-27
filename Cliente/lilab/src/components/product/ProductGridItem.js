import React from 'react';
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap';

export const ProductGridItem = ( {title, description, price, stock, url} ) => {

    return (
        <CardGroup className="m-3 d-block">
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
                        </Card.Body>
                        <div className="text-center">
                            <Button variant="primary">Añadir a carrito</Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </CardGroup>
    )
}