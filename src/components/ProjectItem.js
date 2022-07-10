import propTypes from 'prop-types';
import ProjectItemModel from "../models/ProjectItemModel";

function ProjectItem(props) {

    const {item} = props;
    return (
        <li>
            <img src={item.img} alt={item.category}/>
        </li>
    );

}

ProjectItem.propTypes = {
    item: propTypes.instanceOf(ProjectItemModel).isRequired
};

export default ProjectItem;