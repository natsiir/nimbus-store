"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PageContent = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <Pagination className="mx-auto">
      <PaginationContent className="gap-2">
        <PaginationItem className="pl-[10px] pr-4">
          <PaginationPrevious
            href={currentPage > 1 ? "#" : ""}
            onClick={(e) =>
              currentPage <= 1
                ? e.preventDefault()
                : handlePageChange(currentPage - 1)
            }
            className={`gap-1 ${
              currentPage <= 1
                ? "pointer-events-none cursor-not-allowed text-gray-500"
                : ""
            }`}
          />
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(index + 1)}
              className={`p-2 rounded-lg ${
                index + 1 === currentPage ? "" : "text-gray-500"
              }`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem className="pr-[10px] pl-4 ">
          <PaginationNext
            href={currentPage === totalPages ? "#" : "#"}
            onClick={(e) => {
              currentPage === totalPages
                ? e.preventDefault()
                : handlePageChange(currentPage + 1);
            }}
            className={`gap-1 ${
              currentPage === totalPages
                ? "pointer-events-none cursor-not-allowed text-gray-500"
                : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
export default PageContent;
