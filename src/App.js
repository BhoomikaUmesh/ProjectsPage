import React, { useState } from 'react';
import ProjectsPage from './ProjectsPage';

function App() {
  const simulatedProjects = [
    {
      _id: 1,
      project_image: 'https://via.placeholder.com/300',
      project_name: 'Project 1',
      project_description: 'Description for Project 1',
    },
    {
      _id: 2,
      project_image: 'url-to-image-2',
      project_name: 'Project 2',
      project_description: 'Description for Project 2',
    },
    {
      _id: 3,
      project_image: 'url-to-image-3',
      project_name: 'Project 3',
      project_description: 'Description for Project 3',
    },
    {
      _id: 4,
      project_image: 'url-to-image-4',
      project_name: 'Project 4',
      project_description: 'Description for Project 4',
    },
    {
      _id: 5,
      project_image: 'url-to-image-5',
      project_name: 'Project 5',
      project_description: 'Description for Project 5',
    },
    {
      _id: 6,
      project_image: 'url-to-image-6',
      project_name: 'Project 6',
      project_description: 'Description for Project 6',
    },
    {
      _id: 7,
      project_image: 'url-to-image-7',
      project_name: 'Project 7',
      project_description: 'Description for Project 7',
    },
    {
      _id: 8,
      project_image: 'url-to-image-8',
      project_name: 'Project 8',
      project_description: 'Description for Project 8',
    },
    {
      _id: 9,
      project_image: 'url-to-image-9',
      project_name: 'Project 9',
      project_description: 'Description for Project 9',
    },
  ];

  return (
    <div className="App">
      <ProjectsPage projects={simulatedProjects} />
    </div>
  );
}

export default App;
