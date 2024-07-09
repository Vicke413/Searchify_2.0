import React, { useState } from 'react';

import { Footer } from './Components/Foot';
import { Navbar } from './Components/Navbar';
import { Routes } from './Components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Foot />
      </div>
    </div>

  );
};

export default App;