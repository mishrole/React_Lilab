import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { generatePath, useHistory } from 'react-router-dom';

export const CategoryCard = ( { category }) => {

    const history = useHistory();

    const handleClick = (categoryId) => () => {
        history.push(generatePath("/product/:productId", { categoryId }));   
    }

    return (
        <Card className="text-center">
            <Card.Header>{ category.id }</Card.Header>
            <Card.Body>
                <Card.Title> { category.title }</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Button variant="primary" onClick = { handleClick(category.id) }>Ver {category.title}</Button>
            </Card.Footer>
        </Card>
    )
}