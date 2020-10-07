import React, { useState } from 'react';
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall'
import Body from './Body'
import { useMediaPredicate } from "react-media-hook";
import './styles/App.scss';

function App() {
  const [page, setPage] = useState("Portfolio")

  const updatePage = (pageInput) => {
    setPage(pageInput)
  }

  const max769 = useMediaPredicate("(max-width: 767px)");


  return (
    <div className="App">
      {max769 && <NavbarSmall max769={max769} updatePage={updatePage}/>}
      {!max769 && <Navbar max769={max769} updatePage={updatePage}/>}
      <Body  page={page} max769={max769}/>
    </div>
  );
}

export default App;
