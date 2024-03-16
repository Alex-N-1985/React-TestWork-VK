import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({photo, title, description, price}) => {
    
    const [quantity, setQuantity] = useState(1);

    return <div className="product__card">
        <img src={photo} alt={title} />
        <h3>{title}</h3>
        <p className="product__card-desc">Описание:<br/>{description}</p>
        <p className="product__card-price">Цена: {price} руб.</p>
        <p className="product__card-quant">Колличество: {quantity}</p>
        <div className="product__card-container">
            <button onClick={(e) => {setQuantity(quantity + 1)}}>+</button>
            <button onClick={(e) => {setQuantity(quantity > 0 ? quantity - 1 : 0)}}>-</button>
        </div>
    </div>
}

export default ProductCard;