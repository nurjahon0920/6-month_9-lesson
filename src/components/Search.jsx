import React from "react";

const Search = () => {
  const [searchPhotos, setsearchPhotos] = useState([]);
  useEffect(() => {
    setsearchPhotos(todos);
  }, [todos]);
  const search = (text) => {
    const newPhotos = todos.filter(
      (foto) =>
        foto.title.toLowerCase().includes(text.toLowerCase()) ||
        foto.id.toLowerCase().includes(text.toLowerCase())
    );
    setsearchPhotos(newPhotos);
  };
  return (
    <div>
      <input type="text" placeholder="Searching..." onChange={search} />
    </div>
  );
};

export default Search;
