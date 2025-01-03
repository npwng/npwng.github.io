import projectsContents from '../../../_projects'
import ImageSlider from './image-slider';

// Define the type for a slide
const ProjectCard = ({
    projectName,
    onProjectSelect,
}: {
    projectName: string;
    onProjectSelect: (projectName: string | null) => void;
}) => {
    const matchingProject = projectsContents.find(project => project.title === projectName);
    const slides = matchingProject?.pictures ?? [];
    return (
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
                            onProjectSelect(null); // Pass the project name
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="currentColor"> <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    </a>
                </div>
                <div className='card shadow-lg compact bg-base-100 w-full'> 
                    <div className='pace-x-4 flex pl-6 pr-6 py-4 w-full'>
                        <ImageSlider slides={slides} />
                    </div>
                </div>
                <div className='card shadow-lg compact bg-base-100 w-full'> 
                    {/* <div className='flex pl-6 pr-6 py-6'>
                        {matchingProject?.body}
                    </div> */}
                    <div className='pl-6 pr-6 py-6' dangerouslySetInnerHTML={{ __html: matchingProject?.body || "" }}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
