export const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

export const item = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};

export const itemReverse = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: 'easeInOut',
      duration: 0.8,
    },
  },
};
