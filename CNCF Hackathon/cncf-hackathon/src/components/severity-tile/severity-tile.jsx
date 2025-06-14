import React from "react";
import { motion } from "framer-motion";
import "./severity-tile.scss";

const SeverityTile = ({ title, count, color }) => {
  return (
    <motion.div
      className="severity-tile"
      whileHover={{ scale: 1.05 }}
      style={{ borderColor: color }}
    >
      <h2 style={{ color }}>{title} Severity</h2>
      <span className="count">{count}</span>
    </motion.div>
  );
};

export default SeverityTile;
