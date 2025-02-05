import React, { useEffect, useState } from 'react';
import projectsContents from '../../../_projects';
import ImageSlider from './image-slider';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatePage from '../animate-page';

const sanitizeAndAnimateImages = (htmlContent: string): string => {
const parser = new DOMParser();
const doc = parser.parseFromString(htmlContent, 'text/html');

const images = doc.querySelectorAll('img');

images.forEach((img) => {
    img.setAttribute('style', `${img.getAttribute('style')}; opacity: 0; transition: opacity 0.5s ease-in-out;`);
    img.setAttribute('onload', `this.style.opacity=1;`);
});

return doc.body.innerHTML;
};

const ProjectCard = ({
projectName,
onProjectSelect,
}: {
projectName: string;
onProjectSelect: (projectName: string | null) => void;
}) => {
const matchingProject = projectsContents.find(project => project.title === projectName);
const slides = matchingProject?.pictures ?? [];
const navigate = useNavigate();
const [sanitizedBody, setSanitizedBody] = useState('');

useEffect(() => {
    if (matchingProject?.body) {
    setSanitizedBody(sanitizeAndAnimateImages(matchingProject.body));
    }
}, [matchingProject]);

return (
    <AnimatePage>
    <div className="card compact bg-base-100 shadow bg-opacity-40">
        <div className="card-body grid place-items-center py-8">
        <div className="opacity-90">
            <h5 className="font-bold text-2xl">
            <span className="text-base-content opacity-70">
                {matchingProject?.title}
            </span>
            </h5>
            <a
            style={{ position: 'absolute', top: '0.65rem', left: '0.65rem' }}
            className="transform transition-transform duration-800 hover:scale-105"
            onClick={() => {
                navigate('/');
                onProjectSelect(null); // Pass the project name
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor">
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
            </svg>
            </a>
        </div>
        <div className='card shadow-lg compact bg-base-100 w-full'>
            <div className='pace-x-4 flex pl-6 pr-6 py-4 w-full'>
            <ImageSlider slides={slides} />
            </div>
        </div>
        <div className='card shadow-lg compact bg-base-100 w-full'>
            <AnimatePresence>
            <motion.div
                key={sanitizedBody}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className='px-6 py-6 space-y-4 grid place-items-center' dangerouslySetInnerHTML={{ __html: sanitizedBody || "" }} />
            </motion.div>
            </AnimatePresence>
        </div>
        </div>
    </div>
    </AnimatePage>
);
};

export default ProjectCard;
