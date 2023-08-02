import React from 'react';

const Project = ({ title, description, image, git, app }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img className='custom-image' src={image} alt={title} />
      <p>{description}</p>
      <div>
        <a className='App-link' href={git} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        <br/>
        <a className='App-link' href={app} target="_blank" rel="noopener noreferrer">Live App</a>
      </div>
    </div>
  );
};

export default Project;
