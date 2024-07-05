import React, { useState, useEffect } from "react";
import axios from "axios";

const Photos = ({ searchPhotos }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredPhotos = searchPhotos.length ? searchPhotos : photos;

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="photos">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="photo">
              <img src={photo.url} alt={photo.title} />
              <div className="photo_text">
                <p>ID: {photo.id}</p>
                <h3>{photo.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Photos;
