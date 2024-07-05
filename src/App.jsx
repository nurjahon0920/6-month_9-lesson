import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Photos from "./components/Photos";
import BackToTopButton from "./assets/BackToTopButton";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Photos />
        </div>
      </main>
      <BackToTopButton />
    </>
  );
};

export default App;
