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
                    {
                        categories.map((category, index) => {
                            return (
                                <Col className="mt-4 mb-4" xs = { 12 } sm = { 6 } lg = { 4 } key = { `productContrainer-${ index }` }>
                                    <ProductGrid category = { category }/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>

        
    )
}