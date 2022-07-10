import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    const buttons = filters.map((filterVal, key) =>
        <Button
            key={key}
            value={filterVal}
            className={filterVal === selected && 'btn-secondary'}
            onClick={() => onSelectFilter(filterVal)}>
            {filterVal}
        </Button>
    );

    return (
        <ButtonGroup aria-label="Filter">
            {buttons}
        </ButtonGroup>
    );
}

export default Toolbar;