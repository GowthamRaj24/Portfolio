// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import First from './sections/First';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <Loader /> : 
      <First />}
    </div>
  );
}

export default App;
