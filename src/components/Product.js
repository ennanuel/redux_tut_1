import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Product = ({ id, name, price, imageUrl}) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(cartActions.addToCart({
            name,
            id,
            price
        }));
    }

    return <div className="product">
        <div className="prod-image">
            <img src={imageUrl} alt={name} className="image" />
        </div>
        <p className="prod-title">{name}</p>
        <p className="prod-price">${price}</p>
        <button className="btn" id="add-to-cart" onClick={handleClick}>Add to Cart</button>
    </div>
}


export default Product;