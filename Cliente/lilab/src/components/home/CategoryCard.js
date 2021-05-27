import React from 'react';
import { Container, Row, Col, CardGroup, Card, Button } from 'react-bootstrap';
import { generatePath, useHistory } from 'react-router-dom';

export const CategoryCard = ( { category }) => {

    const history = useHistory();

    const handleClick = (categoryId) => () => {
        history.push(generatePath("/category/:categoryId", { categoryId }));   
    }

    return (
        <Container fluid className="text-center">
            <CardGroup className="m-2 d-block">
                <Card className="m-2 border-0">
                    <Card.Img variant="top" src={category.url} alt={category.title} />
                    <Card.Footer className="text-muted">
                        <Button variant="primary" onClick = { handleClick(category.id) }>Ver {category.title}</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Container>
    )
}