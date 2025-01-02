"use client";
import { fetchProducts } from "@/lib/utils/fetchProduct";
import { useEffect, useState } from "react";
import ContentKatalog from "@/components/ContentKatalog";
import ResultContent from "@/components/ResultContent";
import Header from "@/components/Header";
import Selectfield from "@/components/SelectField";
import Footer from "@/components/Footer";
import Tittle from "@/components/Tittle";
import SideApp from "@/components/SideApp";
import { fetchCategories } from "@/lib/utils/fetchCategory";

const Index = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedSort, setSelectedSort] = useState("Urutkan Berdasarkan");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const productsPerPage = 12;

  // Fetch data
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();

      // diskon untuk setiap produk
      const productsWithDiscount = data.map((product) => {
        const discountPercentage = Math.random() * (13 - 5) + 5;
        return {
          ...product,
          discountPercentage: parseFloat(discountPercentage.toFixed(2)),
        };
      });

      setProducts(productsWithDiscount);
    };

    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };

    loadProducts();
    loadCategories();
  }, []);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  const handleSearchChange = (search) => {
    setSearchTerm(search);
  };

  const handleSortChange = (sortValue) => {
    setSortOrder(sortValue);
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleSelection = (value, label) => {
    setSelectedSort(label); // Update teks berdasarkan pilihan
    handleSortChange(value); // Panggil fungsi handler dengan nilai pilihan
  };

  const handleMinChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
  };

  // kategori, rating, dan pencarian
  const filteredProducts = products.filter((product) => {
    const hargaProduk = product.price * 15000;

    const categoryMatch = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;
    const ratingMatch = selectedRatings.length
      ? selectedRatings.includes(Math.round(product.rating.rate))
      : true;
    const searchMatch =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

    const priceMatch =
      (minPrice === "" || hargaProduk >= minPrice) &&
      (maxPrice === "" || hargaProduk <= maxPrice);

    return categoryMatch && ratingMatch && searchMatch && priceMatch;
  });

  // Urutkan
  const sortedProducts = [...filteredProducts];
  if (sortOrder === "lowToHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortOrder === "mostPopular") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sortOrder === "random") {
    sortedProducts.sort(() => Math.random() - 0.5);
  } else if (sortOrder === "discount") {
    sortedProducts.sort((a, b) => b.discountPercentage - a.discountPercentage);
  }

  // total page
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <Header />
      <Tittle handleSearchChange={handleSearchChange} searchTerm={searchTerm} />
      <div className="w-full flex lg:flex-col flex-row max-w-[1440px] lg:h-full px-4 lg:px-10 pb-10 lg:pb-[60px]">
        <div className="grid lg:flex w-full gap-4">
          {/* Sidebar */}
          <div className="flex justify-between w-full lg:w-[256px] h-fit lg:h-full sticky top-[61px] z-[9] ">
            <SideApp
              categories={categories}
              selectedCategories={selectedCategories}
              selectedRatings={selectedRatings}
              handleCategoryChange={handleCategoryChange}
              handleRatingChange={handleRatingChange}
              minPrice={minPrice}
              handleMinChange={handleMinChange}
              maxPrice={maxPrice}
              handleMaxChange={handleMaxChange}
            />
            <div className="lg:hidden">
              <Selectfield handleSortChange={handleSortChange} />
            </div>
          </div>
          {/* Main Content */}
          <div className="w-full max-w-[1064px] h-full">
            <div className="flex flex-col w-full gap-6">
              <div className="w-full flex flex-row items-center justify-between">
                <ResultContent totalResults={filteredProducts.length} />
                <div className="hidden lg:block">
                  <Selectfield
                    handleSelection={handleSelection}
                    selectedSort={selectedSort}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center w-full">
                <div className="grid items-center gap-6 grid-cols-2 h-full min-h-[calc(6*10rem)] sm:grid-cols-3 sm:min-h-[calc(4*10rem)] lg:grid-cols-4 lg:min-h-[calc(3*10rem)] overflow-x-hidden pb-[14px] lg:pb-[40px]">
                  <ContentKatalog
                    products={currentProducts}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
