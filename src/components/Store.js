import IconSwitch from "./IconSwitch";
import {useState} from "react";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store(props) {
    const {products} = props;
    const [icon, setIcon] = useState('view_list');
    const isView = icon === 'view_list';
    const onSwitch = (icon) => {
        setIcon(prevIcon => {
            return prevIcon === 'view_list' ? 'view_module' : 'view_list';
        })
    };

    return (
        <>
            <IconSwitch
                icon={icon}
                onSwitch={onSwitch}
            />

            {
                isView
                    ? <CardsView cards={products}/>
                    : <ListView items={products}/>
            }
        </>
    );

}

export default Store;