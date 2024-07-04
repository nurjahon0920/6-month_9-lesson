import React, { useState, useEffect } from "react";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/photos")
      .then((response) => {
        setPhotos(response.data);
        setsearchPhotos(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setsearchPhotos(todos);
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
    <div>
      <div className="photos">{setsearchPhotos.length > 0 && { Photos }}</div>
    </div>
  );
};

export default Photos;
