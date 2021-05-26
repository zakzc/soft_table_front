import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination = ({
  totalNoRegisters,
  currentPage,
  numberOfPages,
  initialRegister,
  finalRegister,
  setCurrentPage,
}) => {
  // console.log(
  //   "Pagination: ",
  //   totalNoRegisters,
  //   currentPage,
  //   initialRegister,
  //   finalRegister
  // );

  let pageNumbers = [];
  console.log(pageNumbers);
  for (let j = 1; j < numberOfPages + 1; j++) {
    pageNumbers.push(j);
  }
  console.log(pageNumbers);
  {
  }
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Anterior
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Próximo
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando de <span className="font-medium">{initialRegister}</span>{" "}
            a <span className="font-medium">{finalRegister}</span> de{" "}
            <span className="font-medium">{totalNoRegisters}</span> resultados
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Anterior</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
            {pageNumbers.map((i) => (
              <span
                aria-current="page"
                className="z-10 bg-white-50 border-black-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                {i}
              </span>
            ))}
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Próximo</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
