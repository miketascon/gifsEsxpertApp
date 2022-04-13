import React from "react";
import { useFetchGits } from "../hooks/useFetchGits";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGits(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      {
        <div className="card-grid">
          {images.map((img) => {
            return <GifGridItem key={img.id} {...img} />;
          })}
        </div>
      }
    </>
  );
};
