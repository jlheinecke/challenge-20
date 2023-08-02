import React from 'react';
import Project from '../components/Project';

const projectsData = [
  {
    title: 'TechTrek: Travel and Event Recommendation App',
    description: 'This app utilizes ChatGPT to provide recommendations for events, sites and attractions to visit, and other fun activities based on your location or planned destination.',
    image: '.src/img/TechTrek.png',
    git: 'https://github.com/JelloElephant/TechTrek',
    app: 'https://tech-trek-e5b0894a635c.herokuapp.com/login'
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2',
    image: 'project2.jpg',
  },

];

const Portfolio = () => {
  return (
    <div className='App-portfolio'>
      <h2>Portfolio</h2>
      <div>
      {projectsData.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} image={project.image} git={project.git} app={project.app}/>
      ))}
      </div>
    </div>
  );
};

export default Portfolio;
