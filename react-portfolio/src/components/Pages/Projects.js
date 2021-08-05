import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Cards

function ProjectCards(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img class="img-thumbnail" alt={props.name} src={props.image}/>
            </div>
            <div className="content">
                <p className="card-title">{props.name}</p>
                <p class="proj-icons-container">

                </p>
                <p class="topics">
                    {props.topics}
                </p>
            </div>
        </div>
    );
}
export default ProjectCards;