import React from 'react';
import { ProductGrid } from '../../components/product/ProductGrid';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProductGridPage = (param) => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Lilab</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link className="nav-link" to={`/home`}>Home</Link>
                        </Nav>
                    
                </Container>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col className="mt-4 mb-4" xs = { 12 }>
                        <ProductGrid category = { param.match.params.categoryId } key={`ProductGrid-${param.match.params.categoryId}`}/>
                    </Col>
                </Row>
            </Container>
        </>

        
    )
}