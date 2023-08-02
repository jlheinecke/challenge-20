import React from 'react';
import Project from '../components/Project';

const projectsData = [
  {
    title: 'TechTrek: Travel and Event Recommendation App',
    description: 'This app utilizes ChatGPT to provide recommendations for events, sites and attractions to visit, and other fun activities based on your location or planned destination.',
    image: '/TechTrek.png',
    git: 'https://github.com/JelloElephant/TechTrek',
    app: 'https://tech-trek-e5b0894a635c.herokuapp.com/login'
  },
  {
    title: 'Relational Research: Find Works By Your Favorite Artists',
    description: 'Related Research is a media query application that takes a search query and find content related to your query by genere. It uses OMDB and Reddit APIs',
    image: '/RelationalResearch.png',
    git: 'https://github.com/csutrick/Project1',
    app: 'https://csutrick.github.io/Project1/'
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
