import React from "react"
import './card.css'

const ProductCard = ({ card }) => {
    // console.log(card)
    return (<>
        <div className="article">
            <div className="content">
                <h1>{card.userId}</h1>
                <div>
                    <h3>{card.id}</h3>
                    <h3>{card.title}</h3>
                </div>
                <p>{card.body}</p>
            </div>
        </div>
        </>
    )
}

export default ProductCard