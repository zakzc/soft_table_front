import React from "react";

export default function Alerts(customAlert) {
  if (customAlert.type == "warn") {
    return (
      <div>
        <div className="bg-yellow-50 p-4 rounded flex items-start text-yellow-600 my-4 shadow-lg mx-auto max-w-2xl">
          <div className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-5 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 1l-12 22h24l-12-22zm-1 8h2v7h-2v-7zm1 11.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
          </div>
          <div className=" px-3">
            <h3 className="text-yellow-800 font-semibold tracking-wider">
              Existem erros no preenchimento
            </h3>
            <p className="pt-2 text-yellow-700">{customAlert.details}</p>{" "}
          </div>
        </div>
      </div>
    );
  }

  if (customAlert.type == "danger") {
    return (
      <div>
        <div className="bg-red-50 p-4 rounded flex items-start text-red-600 my-4 shadow-lg mx-auto max-w-2xl">
          <div className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-5 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z" />
            </svg>
          </div>
          <div className=" px-3">
            <h3 className="text-red-800 font-semibold tracking-wider">
              {customAlert.message}
            </h3>
            <p className="pt-2 text-red-700">{customAlert.details}</p>
          </div>
        </div>
      </div>
    );
  }

  if (customAlert.type == "success") {
    return (
      <div>
        <div className="bg-green-50 p-4 rounded flex items-start text-green-600 my-4 shadow-lg mx-auto max-w-2xl">
          <div className="text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-5 pt-1"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
            </svg>
          </div>
          <div className=" px-3">
            <h3 className="text-green-800 font-semibold tracking-wider">
              {customAlert.message}
            </h3>
            <p className="pt-2 text-green-700">{customAlert.details}</p>
          </div>
        </div>
      </div>
    );
  }
  /* eslint eqeqeq: "off", curly:"error" */
  return null;
}

// From: https://tailwindcomponents.com/component/alerts-collection
