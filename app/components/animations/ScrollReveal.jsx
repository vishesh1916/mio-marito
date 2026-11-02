"use client";

import { motion } from "framer-motion";

/*
  ScrollReveal — High-performance, fail-safe scroll reveal animation wrapper.
  Content remains visible and gracefully transitions in on scroll without risking blank screens.
*/

const variantStyles = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  curtainUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  none: {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  },
};

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  threshold = 0.05,
  staggerChildren = 0,
  delayChildren = 0,
  ...props
}) {
  const selectedVariant = variantStyles[variant] || variantStyles.fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: "0px 0px -30px 0px" }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
            ...(staggerChildren > 0 && {
              staggerChildren,
              delayChildren: delayChildren || delay,
            }),
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* StaggerChild — for items inside a parent with staggerChildren */
export function StaggerChild({
  children,
  className = "",
  variant = "fadeUp",
  duration = 0.5,
  ...props
}) {
  const selectedVariant = variantStyles[variant] || variantStyles.fadeUp;

  return (
    <motion.div
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
