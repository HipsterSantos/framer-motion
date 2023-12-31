// App.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  enter: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const App = () => {
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleComponent = () => {
    setShowComponentB(!showComponentB);
  };

  return (
    <div>
      <button onClick={toggleComponent}>Toggle Component</button>

      <AnimatePresence exitBeforeEnter>
        {showComponentB ? (
          <motion.div
            key="componentB"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
          >
            <ComponentB />
          </motion.div>
        ) : (
          <motion.div
            key="componentA"
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
          >
            <ComponentA />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ComponentA = () => {
  return (
    <div>
      <h2>Component A</h2>
      <p>This is Component A.</p>
    </div>
  );
};

const ComponentB = () => {
  return (
    <div>
      <h2>Component B</h2>
      <p>This is Component B.</p>
    </div>
  );
};

export default App;

