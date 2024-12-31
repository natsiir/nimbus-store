import _ from "lodash";
import { backupData } from "../dummy";

export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");

    const products = await res.json();

    // Memastikan data adalah array dan tidak kosong, jika tidak menggunakan data cadangan
    const productsList =
      _.isArray(products) && !_.isEmpty(products) ? products : backupData;

    // Mengacak urutan produk
    return productsList;
  } catch (error) {
    console.warn("Error fetching products, using backup data:", error.message);
    // Menggunakan data cadangan jika terjadi error dan mengacak urutannya
    return backupData;
  }
}
