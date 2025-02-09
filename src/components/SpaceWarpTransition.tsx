import { motion } from "framer-motion";
import { useState, ReactNode } from "react";
import { useNavigate } from "react-router";

interface SpaceWarpTransitionProps {
  children: ReactNode;
  navigateTo: string;
  transitionDuration?: number;
}

const SpaceWarpTransition: React.FC<SpaceWarpTransitionProps> = ({ children, navigateTo, transitionDuration = 10 }) => {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    setIsExiting(true);
    setTimeout(() => navigate(navigateTo), transitionDuration * 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={isExiting ? { opacity: 0, scale: 2, rotate: 15 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={handleNavigation}
      style={{ cursor: "pointer" }}
    >
      {children}
    </motion.div>
  );
};

export default SpaceWarpTransition;
