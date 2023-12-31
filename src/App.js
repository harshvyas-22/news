import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Newsboard from './components/Newsboard';

function App() {
  const [category, setCategory] = useState('general');
  const [search, setSearch] = useState('');

  return (
    <div>
      <Navbar setCategory={setCategory} setSearch={setSearch} />
      <Newsboard category={category} search={search} />
    </div>
  );
}

export default App;
