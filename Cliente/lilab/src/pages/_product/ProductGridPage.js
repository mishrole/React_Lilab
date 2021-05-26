import React, { useContext } from 'react';
import { ProductGrid } from '../../components/product/ProductGrid';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainContext from '../../context/mainContext';

export const ProductGridPage = () => {

    const { categories } = useContext(MainContext);

    return (

        <>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Lilab</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Link className="nav-link" to={`/home`}>Home</Link>
                    </Nav>
                </Navbar>
            <Container>
                <Row>
                    <Col className="mt-4 mb-4" xs = { 12 }>
                        <ProductGrid category = { window.location.pathname }/>
                    </Col>
                </Row>
            </Container>
        </>

        
    )
}