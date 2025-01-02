import { Search } from "lucide-react";

const Title = ({ searchTerm, handleSearchChange }) => {
  return (
    <section className="w-full flex flex-col text-center justify-center px-7 md:px-10 pt-10 pb-[32px] md:py-[60px] items-center gap-8 ">
      <h1 className="capitalize font-semibold text-2xl md:text-4xl">
        katalog produk
      </h1>
      <div className="flex items-center border-[1px] rounded-full px-6 py-4 w-full md:max-w-[480px] max-w-[320px]">
        <Search size={24} className="text-gray-400 mr-2" />
        <input
          type="search"
          placeholder="Cari Produk"
          className="flex-1 outline-none bg-transparent text-gray-700"
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </section>
  );
};

export default Title;
