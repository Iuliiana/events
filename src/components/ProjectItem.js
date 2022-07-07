import propTypes from 'prop-types';
import ProjectItemModel from "../models/ProjectItemModel";

function ProjectItem(props) {

    const {item} = props;
    return (
        <div>
            <img src="{item.img}" alt="{item.category}"/>
        </div>
    );

}

ProjectItem.propTypes = {
    item: propTypes.instanceOf(ProjectItemModel).isRequired
};

export default ProjectItem;