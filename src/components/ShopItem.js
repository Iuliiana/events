import propTypes from 'prop-types';
import ShopItemModel from "../models/ShopItemModel";

function ShopItem(props) {

    const {item} = props;
    //fixme можно вынести в хелперы
    const formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });
    return (
        <div className="list-item">
            <img className="list-img" src={item.img} alt={item.name}/>
            <h5 className="list-title">{item.name}</h5>
            <p className="list-text">{item.color}</p>
            <p className="list-price">{formatter.format(item.price)}</p>
            <button className="btn btn-primary card-button">ADD TO CART</button>
        </div>
    );

}

ShopItem.propTypes = {
    item: propTypes.instanceOf(ShopItemModel).isRequired
};

export default ShopItem;