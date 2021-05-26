import React from 'react'

export const ProductGridItem = ( {title, description, price, stock, url} ) => {

    return (
        <div className="card animate__animated animate__fadeIn animate__delay-1s">
            <div className="card__image">
                <img src={url} alt={title} />
            </div>
            <div className="card__title">
                <p>{title}</p>
                <p>{stock}</p>
                <p>{price}</p>
            </div>
            <div className="card__description">
                <p>{description}</p>
            </div>
        </div>
    )
}