import _ from "lodash";
import { backupData } from "../dummy";

export async function fetchCategories() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Failed to fetch categories");

    const categories = await res.json();

    // Memastikan data adalah array dan tidak kosong, jika tidak menggunakan data cadangan
    const categoriesList =
      _.isArray(categories) && !_.isEmpty(categories)
        ? categories
        : extractCategoriesFromBackup(backupData);

    // Mengurutkan kategori secara abjad
    return _.sortBy(categoriesList);
  } catch (error) {
    console.warn(
      "Error fetching categories, using backup data:",
      error.message
    );
    const categoriesList = extractCategoriesFromBackup(backupData); // Menggunakan data cadangan jika terjadi error

    // Mengurutkan kategori cadangan secara abjad
    return _.sortBy(categoriesList);
  }
}

// Fungsi untuk mengekstrak kategori dari data cadangan
function extractCategoriesFromBackup(data) {
  // Menggunakan Lodash untuk mendapatkan kategori unik dari data cadangan
  return _.uniq(_.map(data, "category"));
}
