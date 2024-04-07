
"use client";

import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useRouter } from "next/navigation";
import { getPriceQueryParams } from "@/helpers/helpers";

const Filters = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const router = useRouter();

  let queryParams;

  function handleClick(checkbox) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
    }

    const checkboxes = document.getElementsByName(checkbox.name);

    checkboxes.forEach((item) => {
      if (item !== checkbox) item.checked = false;
    });

    if (checkbox.checked === false) {
      // Delete the filter from query
      queryParams.delete(checkbox.name);
    } else {
      // Set filter in the query
      if (queryParams.has(checkbox.name)) {
        queryParams.set(checkbox.name, checkbox.value);
      } else {
        queryParams.append(checkbox.name, checkbox.value);
      }
    }
    const path = window.location.pathname + "?" + queryParams.toString();
    router.push(path);
  }

  function handleButtonClick() {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      queryParams = getPriceQueryParams(queryParams, "min", min);
      queryParams = getPriceQueryParams(queryParams, "max", max);

      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  }

  function checkHandler(checkBoxType, checkBoxValue) {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);

      const value = queryParams.get(checkBoxType);
      if (checkBoxValue === value) return true;
      return false;
    }
  }
  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
        href="#"
      >
        Filter by
      </a>
      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold text-black mb-2">Price (₹)</h3>
        <div className="grid md:grid-cols-3 gap-x-2">
          <div className="mb-4">
            <input
              name="min"
              className="appearance-none text-black border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Min"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <input
              name="max"
              className="appearance-none text-black border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
              type="number"
              placeholder="Max"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <button
             className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
            onClick={handleButtonClick}
            >
              Go
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
        <h3 className="font-semibold text-black mb-2">Category</h3>

        <ul className="space-y-1">
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Paper"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Paper")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Paper </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Plastic"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Plastic")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Plastic </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Car Scrap"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Car Scrap")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Car Scrap </span>
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input
                name="category"
                type="checkbox"
                value="Metal"
                className="h-4 w-4"
                defaultChecked={checkHandler("category", "Metal")}
                onClick={(e) => handleClick(e.target)}
              />
              <span className="ml-2 text-gray-500"> Metal </span>
            </label>
          </li>

        </ul>

        <hr className="my-4" />

        <h3 className="font-semibold text-black mb-2">Ratings</h3>
        <ul className="space-y-1">
          <li>
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  name="ratings"
                  type="checkbox"
                  value={rating}
                  className="h-4 w-4"
                  defaultChecked={checkHandler("ratings", `${rating}`)}
                  onClick={(e) => handleClick(e.target)}
                />
                <span className="ml-2 text-gray-500">
                  {" "}
                  <StarRatings
                    rating={5}
                    starRatedColor="#ffb829"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name="rating"
                  />{" "}
                </span>
              </label>
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Filters; 
