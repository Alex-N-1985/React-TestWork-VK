import { useState } from "react";
import "./ProductCard.css";
import deleteIcon from "../assets/images/delete-icon.svg";
import { changeQuantity, deleteProduct } from "../store/products";
import { useDispatch } from "react-redux";

const ProductCard = ({id, photo, title, description, price}) => {
    
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const deleteHandler = (item) => {
        dispatch(deleteProduct(item));
    }

    const plusHandler = (quantity) => {
        setQuantity(quantity < 10 ? quantity + 1 : 10);
        dispatch(changeQuantity({id, photo, title, description, price, quantity}))
    }

    const minusHandler = (quantity) => {
        setQuantity(quantity > 1 ? quantity - 1 : 1);
        dispatch(changeQuantity({id, photo, title, description, price, quantity}))
    }

    return <div className="product__card">
        <img src={photo} alt={title} />
        <h3>{title}</h3>
        <p className="product__card-desc">Описание:<br/>{description}</p>
        <p className="product__card-price">Цена: {price} USD.</p>
        <p className="product__card-quant">Колличество: {quantity}</p>
        <div className="product__card-container">
            <button onClick={(e) => {plusHandler(quantity)}}>+</button>
            <button onClick={(e) => {minusHandler(quantity)}}>-</button>
            <button onClick={(e) => {deleteHandler({id, photo, title, description, price})}}>
                <img src={deleteIcon} alt="Удалить товар" />
            </button>
        </div>
    </div>
}

export default ProductCard;