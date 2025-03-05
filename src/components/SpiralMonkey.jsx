import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import monkeyImg from "../assets/images/monkey.png";
import globeImg from "../assets/images/globe.png";
import SpiralMotion from "./SpiralMtion";

const SpiralMonkey = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setStep((prev) => {
        const angle = prev * 0.2;
        const radius = 5 * Math.sqrt(prev);
        setX(radius * Math.cos(angle));
        setY(radius * Math.sin(angle) - 100);
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] w-full relative">
      <SpiralMotion />
      <div className="relative w-full h-[60vh] flex items-center justify-center">
  <motion.img
    src={monkeyImg}
    alt="Monkey"
    className="w-20 h-20  absolute rounded-full"
    initial={{ x: 0, y: 0 }}
    animate={running ? { x, y } : {}}
    transition={{ duration: 0.1, ease: "linear" }}
  />
  <motion.img
    src={globeImg}
    alt="Globe"
    className="w-10 h-10 absolute rounded-full"
    initial={{ x: 0, y: 0 }}
    animate={running ? { x: x + 40, y: y + 40 } : {}}
    transition={{ duration: 0.1, ease: "linear" }}
  />
</div>

<div className="flex justify-end mt-5">
  
<div className="w-full flex justify-end mt-5">
  <button
    onClick={() => setRunning(!running)}
    className="px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-700 text-white font-semibold rounded-xl shadow-lg hover:from-blue-700 hover:to-red-500 transition-all duration-300"
  >
    {running ? "Stop" : "Start"}
  </button>
</div>

</div>

    </div>
  );
};

export default SpiralMonkey;
