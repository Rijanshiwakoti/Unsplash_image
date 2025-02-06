import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useGlobalContext } from "./contect";

const Gallery = () => {
  const { searchValue } = useGlobalContext();
  const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }`;
  const { data, isPending, isError } = useQuery({
    queryKey: ["images", searchValue],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchValue}`);
      return response.data;
    },
  });
  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>There was an Error</p>;
  }
  if (data?.results < 1) {
    return <p>Image not Found</p>;
  }

  return (
    <div className="image-container">
      {data?.results?.map((item) => {
        return (
          <div className="img">
            <img
              src={item.urls.regular}
              alt={item.alt_description}
              key={item.id}
              className="img"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
