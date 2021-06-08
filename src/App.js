import React, { useState } from 'react';
import './App.scss';
import './styles/_color-themes.scss';
import Navbar from './components/Navbar/Navbar';

const App = () => {

  const [theme, setTheme] = useState('Purple')

  return (
    <div className={theme}>
      <Navbar/>
    </div>
  );
}

export default App;
