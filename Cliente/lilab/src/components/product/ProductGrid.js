import React from 'react';
import { ProductGridItem } from './ProductGridItem';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { Container, Row, Col } from 'react-bootstrap';

export const ProductGrid = ({ category }) => {
    
    const { products, loading } = useFetchProducts(category);
    
    return (
        <>
            {
                loading && <p className="animate__animated animate__flash animate__delay-1s">loading</p>
            }

            <div className="card-grid">
                <Container>
                    <Row>
                    {
                        
                        products.map(product => {
                            return (
                                <Col xs={12} sm={6} md={4}>
                                    <ProductGridItem key={product.id} {...product}/>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Container>
            </div>
        </>
    )
}