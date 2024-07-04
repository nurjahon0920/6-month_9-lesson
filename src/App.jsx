import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const Photos = photos?.map((photo) => (
    <div key={photo.id} className="photo">
      <img src={photo.url} alt={photo.title} />
      <div className="photo_text">
        <p>ID: {photo.id}</p>
        <h3>{photo.title}</h3>
      </div>
    </div>
  ));
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <input type="text" placeholder="Searching..." />
          <div className="photos">{Photos}</div>
        </div>
      </main>
    </>
  );
};

export default App;
