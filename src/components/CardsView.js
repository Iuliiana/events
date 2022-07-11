import uuid from "react-uuid";
import ShopCard from "./ShopCard";

function CardsView(props) {
    const cards = props.cards;

    return (
        <div className="cards-view">
            {cards.map(o => <ShopCard key={uuid()} item={o}/>)}
        </div>
    );
}

export default CardsView;