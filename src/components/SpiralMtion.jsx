import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SpiralMotion = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const angle = step * 0.2;
      const radius = 5 * Math.sqrt(step);
      setX(radius * Math.cos(angle));
      setY(radius * Math.sin(angle) - 100); // Moves up by 100px
      setStep((prev) => prev + 1);
    }, 50); // Update every 50ms

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="flex items-center justify-center h-[80vh]  relative"> 
    
      <motion.div
        className="w-10 h-10 bg-yellow-500 rounded-full absolute"
        animate={{ x, y }}
        transition={{ duration: 0.1, ease: "linear" }}
      />
    </div>
  );
};

export default SpiralMotion;
