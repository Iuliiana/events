// import propTypes from "prop-types";
// import Portfolio from "../components/Portfolio";
import Button  from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';

const Filterpage = () => {
    return (
        <>
            <ButtonGroup aria-label="Filter">
                <Button variant="All">All</Button>
                <Button variant="Websites">Websites</Button>
                <Button variant="Flayers">Flayers</Button>
                <Button variant="Business Cards">Business Cards</Button>
            </ButtonGroup>
        </>
    );
}

export {Filterpage};