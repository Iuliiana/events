import propTypes from 'prop-types';
import ShopItemModel from "../models/ShopItemModel";

function ShopCard(props) {
    const {item} = props;
    //fixme можно вынести в хелперы
    const formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    });

    return (
        <div className="card-item">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.color}</p>
            <img className="card-img-top" src={item.img} alt={item.name}/>
            <div className="card-body">
                <p className="card-price">{formatter.format(item.price)}</p>
                <button className="btn btn-primary card-button">ADD TO CART</button>
            </div>
        </div>
    );

}

ShopCard.propTypes = {
    item: propTypes.instanceOf(ShopItemModel).isRequired
};

export default ShopCard;