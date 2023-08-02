import React from 'react';
import Project from '../components/Project';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description for Project 1',
    image: 'project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: 'project2.jpg',
  },

];

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      {projectsData.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} image={project.image} />
      ))}
    </div>
  );
};

export default Portfolio;
