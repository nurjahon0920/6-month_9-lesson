import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Photos from "./components/Photos";
import BackToTopButton from "./assets/BackToTopButton";

const App = () => {
  const [searchPhotos, setSearchPhotos] = useState([]);

  useEffect(() => {}, []);

  const search = (event) => {
    const text = event.target.value;
    const newPhotos = searchPhotos.filter(
      (foto) =>
        foto.title.toLowerCase().includes(text.toLowerCase()) ||
        foto.id.toString().toLowerCase().includes(text.toLowerCase())
    );
    setSearchPhotos(newPhotos);
  };

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <input type="text" placeholder="Searching..." onChange={search} />
          <Photos searchPhotos={searchPhotos} />
        </div>
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
