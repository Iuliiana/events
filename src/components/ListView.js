import ShopItem from "./ShopItem";
import uuid from "react-uuid";

function ListView(props) {
    const items = props.items;

    return (
        <div className="list-view">
            {items.map(o => <ShopItem key={uuid()} item={o}/>)}
        </div>
    );
}

export default ListView;