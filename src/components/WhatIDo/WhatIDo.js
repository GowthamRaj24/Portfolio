
import { motion } from "framer-motion";

function WhatIDo() {
  const text = "What I Do ?".split(" ");

  return (
    <div className="WhatIDo" style={{marginBottom:"100px"}}>
      {text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}

export default WhatIDo;
