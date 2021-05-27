import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = ({ setCurrentPage, paginationStatus }) => {
  console.log("Pagination: ", paginationStatus);
  // * ####### Data #######
  let pageNumbers = [];
  for (let j = 1; j < paginationStatus.pages + 1; j++) {
    pageNumbers.push(j);
  }
  const handlePagination_minus = () => {
    setCurrentPage(Math.max(paginationStatus.current - 1, 1));
  };
  const handlePagination_plus = () => {
    setCurrentPage(
      Math.min(paginationStatus.current + 1, paginationStatus.pages)
    );
  };
  const handlePagination_number = (n) => {
    console.log("click");
    setCurrentPage(n);
  };
  // * ####### View #######
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={handlePagination_minus}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Anterior
        </button>
        <button
          onClick={handlePagination_plus}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Próximo
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando de{" "}
            <span className="font-medium">{paginationStatus.initial}</span> a{" "}
            <span className="font-medium">{paginationStatus.final - 1}</span> de{" "}
            <span className="font-medium">{paginationStatus.total - 1}</span>{" "}
            resultados
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={handlePagination_minus}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {pageNumbers.map((i) => (
              <button
                onClick={() => handlePagination_number(i)}
                key={i}
                aria-current="page"
                className="z-10 bg-white-50 border-black-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {i}
              </button>
            ))}
            <button
              onClick={handlePagination_plus}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Próximo</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
