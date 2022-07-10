import React, {useState} from 'react';
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";


function Portfolio(props) {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];
    const {projects} = props;
    const [filter, setFilter] = useState('All');


    const renderProjects = (filterVal) => {
        return projects.filter(
            (project) => project.category === filterVal
        );
    }
    const renderData = (filter !== 'All') ? renderProjects(filter) : projects;

    return (
        <>
            <Toolbar
                filters={filters}
                selected={filter}
                onSelectFilter={(filter) => {
                    setFilter(filter);
                }}/>

            <ProjectList projects={renderData}/>
        </>
    );

}

export default Portfolio;
