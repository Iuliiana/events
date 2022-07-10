import ProjectItem from "./ProjectItem";
import uuid from 'react-uuid'


function ProjectList(props) {
    const list = props.projects;

    return (
        <ul className="portfolio">
            {list.map(o => <ProjectItem key={uuid()} item={o}/>)}
        </ul>
    );
}

export default ProjectList;