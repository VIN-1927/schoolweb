import { motion } from "framer-motion";

const NewsWithSmoke = () => {
  return (
    <motion.div
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <span className="hidden md:block text-white text-2xl font-bold ml-2 relative z-10">
        NEWS
      </span>
      {/* Animated Smoke Background */}
      <motion.div
        className="absolute inset-0 z-0 opacity-50 animate-smoke"
        style={{
          background: "radial-gradient(circle, rgba(255,0,150,0.6) 10%, rgba(0,0,255,0.3) 50%, rgba(255,165,0,0.5) 90%)",
          filter: "blur(30px)",
        }}
      />
    </motion.div>
  );
};

export default NewsWithSmoke;
