import { Button } from "flowbite-react";
import React from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  visiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  visiblePages = 5,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    if (totalPages <= visiblePages) {
      // Show all page buttons if total pages is less than or equal to visiblePages
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        buttons.push(
          <button
            key={pageNumber}
            className={`px-3 py-1 rounded-md ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      }
    } else {
      const halfVisible = Math.floor(visiblePages / 2);
      let startPage = currentPage - halfVisible;
      let endPage = currentPage + halfVisible;

      if (startPage < 1) {
        startPage = 1;
        endPage = visiblePages;
      } else if (endPage > totalPages) {
        startPage = totalPages - visiblePages + 1;
        endPage = totalPages;
      }

      for (let pageNumber = startPage; pageNumber <= endPage; pageNumber++) {
        buttons.push(
          <button
            key={pageNumber}
            className={`px-3 py-1 rounded-md ${
              pageNumber === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      }

      if (startPage > 1) {
        buttons.unshift(
          <button
            key="startEllipsis"
            className="px-3 py-1 rounded-md bg-gray-200 text-gray-700"
            disabled
          >
            ...
          </button>
        );
      }

      if (endPage < totalPages) {
        buttons.push(
          <button
            key="endEllipsis"
            className="px-3 py-1 rounded-md bg-gray-200 text-gray-700"
            disabled
          >
            ...
          </button>
        );
      }
    }

    return buttons;
  };

  return (
    <div className="flex justify-between items-center mt-4 w-full px-5">
      {/* <div className="text-sm">{renderRangeMessage()}</div> */}
      <div className="text-sm">
        Showing
        <strong>
          {" "}
          {(currentPage - 1) * itemsPerPage +
            1 +
            "-" +
            Math.min(
              (currentPage - 1) * itemsPerPage + 1 + itemsPerPage - 1,
              totalItems
            )}{" "}
        </strong>
        of
        <strong> {totalItems} </strong> products
      </div>
      <div className="flex space-x-5 items-center">
        <Button
          color="primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <HiChevronLeft className="mr-1 text-base" />
          Previous
        </Button>
        <div>{renderPaginationButtons()}</div>
        <Button
          color="primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <HiChevronRight className="ml-1 text-base" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
