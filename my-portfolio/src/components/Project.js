import React from 'react';

const Project = ({ title, description, image }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Project;
