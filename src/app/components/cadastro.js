import { useState } from "react";

export default function Cadastro() {
  ///
  return (
    <>
      <h2 className="text-2xl p-2 mt-2  font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Novo Cadastro
      </h2>
      <div className="bg-gray-50">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Informações pessoais
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Adicione aqui as informações da nova pessoa
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form>
                {/* <form onSubmit={handleSubmit} method="POST"> */}
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          //   onChange={(e) => setNome(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="age"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Idade
                        </label>
                        <input
                          type="text"
                          name="age"
                          id="age"
                          //   onChange={(e) => setIdade(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-4">
                        <label
                          htmlFor="civilState"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado civil
                        </label>
                        <input
                          type="text"
                          name="civilState"
                          id="civilState"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-8 sm:col-span-3 lg:col-span-2">
                        <label
                          htmlFor="cpf"
                          className="block text-sm font-medium text-gray-700"
                        >
                          CPF
                        </label>
                        <input
                          type="text"
                          name="cpf"
                          id="cpf"
                          autoComplete="postal-code"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cidade
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="state"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado
                        </label>
                        <select
                          id="state"
                          name="state"
                          autoComplete="country"
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Acre</option>
                          <option>Alagoas</option>
                          <option>Amapá</option>
                          <option>Amazonas</option>
                          <option>Bahia</option>
                          <option>Ceará</option>
                          <option>Distrito Federal</option>
                          <option>Espírito Santo</option>
                          <option>Goiás</option>
                          <option>Maranhão</option>
                          <option>Mato Grosso</option>
                          <option>Mato Grosso do Sul</option>
                          <option>Minas Gerais</option>
                          <option>Pará</option>
                          <option>Paraíba </option>
                          <option>Paraná </option>
                          <option>Pernambuco</option>
                          <option>Piauí</option>
                          <option>Rio de Janeiro </option>
                          <option>Rio Grande do Norte </option>
                          <option>Rio Grande do Sul </option>
                          <option>Rondônia </option>
                          <option>Roraima </option>
                          <option> Santa Catarina</option>
                          <option>São Paulo </option>
                          <option>Sergipe</option>
                          <option> Tocantins </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      //   onClick={handleSubmit}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
}
