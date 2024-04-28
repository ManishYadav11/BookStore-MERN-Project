import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

function Freebook() {
  // State for fetched data
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        // Filter fetched data by category
        const freeBooks = res.data.filter((book) => book.category === "Free");
        setBooks(freeBooks);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
        Welcome to our selection of free courses! Explore a variety of educational materials available at no cost. Whether you're interested in literature, science, or history, we've got you covered. 
        Take advantage of these opportunities to expand your knowledge and skills without spending a penny
        </p>
      </div>

      <Slider {...settings}>
        {books.map((book) => (
          <Cards item={book} key={book.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;
