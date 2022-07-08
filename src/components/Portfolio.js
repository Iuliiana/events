// import propTypes from "prop-types";
import Toolbar from "./Toolbar";

class Portfolio extends React.Component {
    render() {
        return (
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected="All"
                onSelectFilter={(filter) => {
                    console.log(filter);
                }}/>
        );
    }
}

export default Portfolio;