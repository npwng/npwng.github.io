import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, scale: 0.975},
    animate: { opacity: 1, scale: 1},
    exit:    { opacity: 0, scale: 0.975},
};

const AnimatePage = ({ children }: {children:any}) => {
return (
    <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ 
        duration: 0.25,
    }}
    >
    {children}
    </motion.div>
);
};

export default AnimatePage;
