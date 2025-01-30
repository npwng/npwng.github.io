import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProjectCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedProject = location.state && location.state.selectedProject;

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Project Card</h1>
      <p>Project: {selectedProject}</p>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
};

export default ProjectCard;
