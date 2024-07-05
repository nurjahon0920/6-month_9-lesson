import React, { useState, useEffect } from "react";
import axios from "axios";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [searchPhotos, setSearchPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  //   const [count, setCount] = useState(8);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/photos")
      .then((response) => {
        setPhotos(response.data);
        setSearchPhotos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(`Error: ${error.message}`);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) =>
      photo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchPhotos(filteredPhotos);
  }, [searchTerm, photos]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return <div className="Error">{error}</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Searching..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="photos">
        {searchPhotos.map((photo) => (
          <div key={photo.id} className="photo" onClick={() => setData(photo)}>
            <img src={photo.url} alt={photo.title} />
            <div className="photo_text">
              <p>ID: {photo.id}</p>
              <h3>{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {/* {searchPhotos.length > count && (
        <div
          className="load_more"
          onClick={() => setCount((prevCount) => prevCount + 8)}>
          Load more
        </div>
      )} */}
      {data && (
        <div className="photo_details">
          <img src={data.url} alt={data.title} />
          <div className="photo_details_text">
            <p>ID: {data.id}</p>
            <h2>{data.title}</h2>
            <p>Album ID: {data.albumId}</p>
            <p>User ID: {data.userId}</p>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment. Bring to the table
              win-win survival strategies to ensure proactive domination. At the
              end of the day, going forward, a new normal that has evolved from
              generation X is on the runway heading towards a streamlined cloud
              solution. User generated content in real-time will have multiple
              touchpoints for offshoring. Capitalize on low hanging fruit to
              identify a ballpark value added activity to beta test. Override
              the digital divide with additional clickthroughs from DevOps.
              Nanotechnology immersion along the information highway will close
              the loop on focusing solely on the bottom line. Leverage agile
              frameworks to provide a robust synopsis for high level overviews.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photos;
