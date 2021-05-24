import { useState } from "react";
import { Redirect } from "react-router-dom";
import { XIcon } from "@heroicons/react/outline";
///
import validate from "../utils/validate";

export default function Cadastro({ addNewPerson }) {
  const [nome, setNome] = useState();
  const [idade, setIdade] = useState();
  const [estadoCivil, setEstadoCivil] = useState();
  const [cpf, setCpf] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [redirect, setRedirect] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(null);
  ///
  const displayValidationMessage = (message) => {
    console.log("=> ", message);
    setDisplayMessage(message);
  };
  ///
  const handleValidation = (data) => {
    let check = validate(data);
    console.log(check.success);
    displayValidationMessage(check.message);
  };
  ///
  const handleSubmit = (event) => {
    event.preventDefault();
    const novoCadastro = { nome, idade, estadoCivil, cpf, cidade, estado };
    if (handleValidation(novoCadastro)) {
      addNewPerson(novoCadastro);
      setRedirect(true);
    }
  };
  ///
  return (
    <>
      <h2 className="text-2xl p-2 mt-2  font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Novo Cadastro
      </h2>
      {/* message */}
      <div
        className="bg-red-lightest border border-red-light text-red-dark pl-4 pr-8 py-3 rounded relative"
        role="alert"
      >
        <span className="block sm:inline">
          <span className="absolute pin-t pin-b pin-r pr-2 py-3">
            <svg
              className="h-6 w-6 text-red"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              {/* <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /> */}
              <XIcon />
            </svg>
          </span>
          {displayMessage}
        </span>
      </div>
      <div className="bg-gray-50">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        {/* form */}
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
                          htmlFor="nome"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="given-name"
                          onChange={(e) => setNome(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="idade"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Idade
                        </label>
                        <input
                          type="text"
                          name="idade"
                          id="idade"
                          onChange={(e) => setIdade(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-4 sm:col-span-4">
                        <label
                          htmlFor="estado_civil"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado civil
                        </label>
                        <input
                          type="text"
                          name="estado_civil"
                          id="estado_civil"
                          onChange={(e) => setEstadoCivil(e.target.value)}
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
                          onChange={(e) => setCpf(e.target.value)}
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
                          onChange={(e) => setCidade(e.target.value)}
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
                          onChange={(e) => setEstado(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="Acre">Acre</option>
                          <option value="Alagoas">Alagoas</option>
                          <option value="Amapá">Amapá</option>
                          <option value="Amazonas">Amazonas</option>
                          <option value="Bahia">Bahia</option>
                          <option value="Ceará">Ceará</option>
                          <option value="Distrito Federal">
                            Distrito Federal
                          </option>
                          <option value="Espírito Santo">Espírito Santo</option>
                          <option value="Goiás">Goiás</option>
                          <option value="Maranhão">Maranhão</option>
                          <option value="Mato Grosso">Mato Grosso</option>
                          <option value="Mato Grosso do Sul">
                            Mato Grosso do Sul
                          </option>
                          <option value="Minas Gerais">Minas Gerais</option>
                          <option value="Pará">Pará</option>
                          <option value="Paraíba">Paraíba </option>
                          <option value="Paraná">Paraná </option>
                          <option value="Pernambuco">Pernambuco</option>
                          <option value="Piauí">Piauí</option>
                          <option value="Rio de Janeiro">Rio de Janeiro</option>
                          <option value="Rio Grande do Norte">
                            Rio Grande do Norte
                          </option>
                          <option value="Rio Grande do Sul">
                            Rio Grande do Sul
                          </option>
                          <option value="Rondônia">Rondônia </option>
                          <option value="Roraima">Roraima </option>
                          <option value="Santa Catarina">Santa Catarina</option>
                          <option value="São Paulo">São Paulo </option>
                          <option value="Sergipe">Sergipe</option>
                          <option value="Tocantins"> Tocantins </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      onClick={handleSubmit}
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

      {redirect ? <Redirect push to="/" /> : null}
    </>
  );
}
