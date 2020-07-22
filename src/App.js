import React, { useState } from 'react';
import Navbar from './Navbar'
import Body from './Body'
import './styles/App.scss';

function App() {
  const [page, setPage] = useState("portfolio")

  const updatePage = (pageInput) => {
    setPage(pageInput)
  }

  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
