import { useState } from "react";
import "./ProductCard.css";
import deleteIcon from "../assets/images/delete-icon.svg";
import { deleteProduct } from "../store/products";

const ProductCard = ({id, photo, title, description, price}) => {
    
    const [quantity, setQuantity] = useState(1);

    const deleteHandler = (item) => {
        deleteProduct(item);
    }

    return <div className="product__card">
        <img src={photo} alt={title} />
        <h3>{title}</h3>
        <p className="product__card-desc">Описание:<br/>{description}</p>
        <p className="product__card-price">Цена: {price} USD.</p>
        <p className="product__card-quant">Колличество: {quantity}</p>
        <div className="product__card-container">
            <button onClick={(e) => {setQuantity(quantity < 10 ? quantity + 1 : 10)}}>+</button>
            <button onClick={(e) => {setQuantity(quantity > 1 ? quantity - 1 : 1)}}>-</button>
            <button onClick={(e) => {deleteHandler({id, photo, title, description, price})}}>
                <img src={deleteIcon} alt="Удалить товар" />
            </button>
        </div>
    </div>
}

export default ProductCard;