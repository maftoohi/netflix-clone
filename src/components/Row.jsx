import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        {movies.length === 0 ? (
          <div id={"slider" + rowId} className="w-full h-full whitespace-nowrap relative">
            <div class="animate-pulse bg-gray-800 rounded m-[11px] w-full h-[82px] sm:h-[103px] md:h-[124px] lg:h-[148px] whitespace-nowrap relative"></div>
          </div>
        ) : (
          <>
            <MdChevronLeft
              onClick={slideLeft}
              size={40}
              className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
            <div
              id={"slider" + rowId}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
            >
              {movies.map((item, id) => (
                <Movie item={item} key={id} />
              ))}
            </div>
            <MdChevronRight
              onClick={slideRight}
              size={40}
              className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
            />
          </>
        )}
      </div>
    </>
  );
};

export default Row;
