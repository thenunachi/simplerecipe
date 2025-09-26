import { motion, useReducedMotion } from "framer-motion";
import "./FloatingFood.css";

import carrot from "./img/carrot.png";
import cooking from "./img/cooking.png";
import leaf from "./img/leaf.png";
import spaguetti from "./img/spaguetti.png";
import tomato from "./img/tomato.png";

const rawItems = [carrot, cooking, leaf, spaguetti, tomato];

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const items = rawItems.map((src, i) => ({
  id: i,
  src,
  left: `${getRandom(5, 90)}%`,       // random horizontal position
  size: `${getRandom(40, 100)}px`,     // random size
  opacity: Math.random() * 0.5 + 0.5,  // random opacity between 0.5–1
  rotate: getRandom(-30, 30),          // random rotation
  duration: getRandom(12, 20),         // random animation speed
  delay: getRandom(0, 5),              // random delay before floating
}));

export default function FloatingBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="floating-wrap" aria-hidden="true">
      {items.map((it) => (
        <motion.img
          key={it.id}
          src={it.src}
          className="food-item"
          style={{
            left: it.left,
            width: it.size,
            opacity: it.opacity,
            rotate: `${it.rotate}deg`,
          }}
          initial={{ y: "110vh", opacity: 0 }}
          animate={reduce ? {} : { y: "-20vh", opacity: 1 }}
          transition={{
            duration: it.duration,
            delay: it.delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
}