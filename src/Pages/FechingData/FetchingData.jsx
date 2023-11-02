import { useEffect, useState } from "react";
import Albums from "./Albums";
import axios from "axios";

const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    /*  const tarea = fetch("http://jsonplaceholder.typicode.com/albums");

    tarea
      .then((res) => res.json())
      .then((res) => setAlbums(res))
      .catch((err) => console.log(err)); */
    const tarea = axios.get("http://jsonplaceholder.typicode.com/albums");

    tarea.then((res) => setAlbums(res.data));
  }, []);

  const crear = () => {
    fetch("http://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "Nuevo Album",
      }),
    });
  };

  return <Albums albums={albums} crear={crear} />;
};
export default FetchingData;
