"use client";
import {
  RiArrowDownDoubleLine,
  RiStarFill,
  RiCloseLine,
} from "@remixicon/react";
import { Filter } from "lucide-react";
import { useState } from "react";

const SideApp = ({
  categories,
  selectedCategories,
  selectedRatings,
  handleCategoryChange,
  handleRatingChange,
  minPrice,
  handleMinChange,
  maxPrice,
  handleMaxChange,
  error,
}) => {
  const [isOverlay, setisOverlay] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar untuk mode desktop */}
      <div className="hidden lg:flex flex-col gap-6 p-4 w-full">
        {/* Kategori */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">Kategori</h3>
          {categories.map((category) => (
            <label key={category} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
        <hr className="border-t border-slate-200" />
        {/* Rating Produk */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">Rating Produk</h3>
          <div className="flex flex-col gap-4">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                className="flex items-center cursor-pointer font-normal"
              >
                <input
                  type="checkbox"
                  value={rating}
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleRatingChange(rating)}
                  className="mr-2"
                />
                {/* Menampilkan bintang sesuai dengan rating */}
                {Array.from({ length: rating }, (_, index) => (
                  <RiStarFill
                    key={index}
                    className={`text-yellow-400 h-5 w-5`}
                    style={{ marginRight: "2px" }}
                  />
                ))}
              </label>
            ))}
          </div>
        </div>
        <hr className="border-t border-slate-200" />

        {/* Rentang Harga */}
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="font-semibold">Harga</h3>
          <div className="flex flex-col gap-4 text-slate-500">
            <input
              type="number"
              id="min"
              value={minPrice}
              onChange={handleMinChange}
              className="w-full px-3 py-2 border border-slate-200 rounded"
              placeholder="Rp. 0"
            />
            <label className="flex items-center ">
              <RiArrowDownDoubleLine size={16} />
              Sampai dengan
            </label>
            <input
              type="number"
              id="max"
              value={maxPrice}
              onChange={handleMaxChange}
              className="w-full px-3 py-2 border border-slate-200 rounded"
              placeholder="Rp. 50.000"
            />
          </div>
        </div>
      </div>

      {/* Button Filter untuk mode mobile */}
      <div className="flex lg:hidden ">
        <button
          onClick={() => setisOverlay(true)}
          className="bg-black text-white rounded-[40px] py-2 px-3 text-sm font-semibold flex items-center h-fit"
        >
          <Filter size={16} /> Filter
        </button>

        {/* Side Content untuk mode mobile */}
        <div
          className={`fixed top-0 left-0 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isOverlay ? "translate-x-0" : "-translate-x-full"
          } w-3/4 max-w-sm`}
        >
          <div className="flex flex-col gap-4 p-6">
            <div className="flex justify-between w-full text-lg font-bold">
              <label>Filter</label>
              {/* Close Button */}
              <button
                onClick={() => setisOverlay(false)}
                className=" text-slate-500 hover:text-slate-700"
              >
                <RiCloseLine size={24} />
              </button>
            </div>

            {/* Kategori */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-semibold">Kategori</h3>
              <div className="flex flex-col gap-4">
                {categories.map((category) => (
                  <label key={category} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-t border-slate-200" />

            {/* Rating Produk */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-semibold">Rating Produk</h3>
              <div className="flex flex-col gap-4">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label
                    key={rating}
                    className="flex items-center cursor-pointer font-normal"
                  >
                    <input
                      type="checkbox"
                      value={rating}
                      checked={selectedRatings.includes(rating)}
                      onChange={() => handleRatingChange(rating)}
                      className="mr-2"
                    />
                    {/* Menampilkan bintang sesuai dengan rating */}
                    {Array.from({ length: rating }, (_, index) => (
                      <RiStarFill
                        key={index}
                        className={`text-yellow-400 h-5 w-5`}
                        style={{ marginRight: "2px" }}
                      />
                    ))}
                  </label>
                ))}
              </div>
            </div>
            <hr className="border-t border-slate-200" />

            {/* Rentang Harga */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-semibold">Harga</h3>
              <div className="flex flex-col gap-4 text-slate-500">
                <input
                  type="number"
                  id="min"
                  value={minPrice}
                  onChange={handleMinChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded"
                  placeholder="Rp. 0"
                />
                <label className="flex items-center ">
                  <RiArrowDownDoubleLine size={16} />
                  Sampai dengan
                </label>
                <input
                  type="number"
                  id="max"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded"
                  placeholder="Rp. 50.000"
                />
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOverlay && (
          <div
            onClick={() => setisOverlay(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
          ></div>
        )}
      </div>
    </div>
  );
};
export default SideApp;
