"use client";

import PageContent from "./PegeContent";
import StarRating from "./StarRating";

const ContentKatalog = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          // Menghitung harga produk dalam satuan Rp.
          const hargaProduk = product.price * 15000;

          // Menghasilkan diskon acak antara 5% hingga 13%
          const discountPercentage = Math.random() * (13 - 5) + 5; // diskon antara 5% - 13%

          // Menghitung harga diskon
          const hargaDiskon =
            hargaProduk + hargaProduk * (discountPercentage / 100);
          const hargaProdukBulatan = Math.floor(hargaProduk);
          const hargaDiskonBulatan = Math.floor(hargaDiskon);
          return (
            <div
              key={product.id}
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                className="h-[220px] md:h-[270px] lg:h-[320px] w-[165px] sm:w-[165px] md:w-[206.5px] lg:w-[248px] rounded-xl"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col gap-3 items-center">
                <div className="flex flex-col items-center  gap-1 text-center">
                  <h3 className="text-slate-900 font-lg line-clamp-2 h-12">
                    {product.title}
                  </h3>
                  <div className="flex items-center -space-x-[2px]">
                    {StarRating(product.rating.rate)}
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-slate-900 text-base">
                    Rp.{Math.floor(product.price * 15000).toLocaleString()}
                  </p>
                  <p className="text-slate-500 text-sm font-medium line-through font-sans ">
                    Rp.
                    {Math.floor(
                      product.price *
                        15000 *
                        (1 + product.discountPercentage / 100)
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No products available</p>
      )}
      {/* <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-4"> */}
      {/* <div>
        <PageContent
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div> */}
    </>
  );
};

export default ContentKatalog;
