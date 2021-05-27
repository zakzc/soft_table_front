import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Pagination from "./pagination";

export default function Table({ listagem, setPersonToManage }) {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalNoRegisters = listagem.length;
  const registersPerPage = 3;
  const numberOfPages = Math.ceil(totalNoRegisters / registersPerPage);
  const initialRegister = Math.max((currentPage - 1) * registersPerPage + 1, 0);
  const finalRegister = Math.min(
    initialRegister + registersPerPage,
    listagem.length
  );
  const paginationStatus = {
    initial: initialRegister,
    final: finalRegister,
    total: totalNoRegisters,
    pages: numberOfPages,
    current: currentPage,
  };
  // current set of registers
  const [people, setPeople] = useState(
    listagem.slice(initialRegister, finalRegister)
  );
  const [goToEdit, setGoToEdit] = useState(false);

  useEffect(() => {
    const updatePagination = () => {
      setPeople(
        listagem.slice(
          Math.max((currentPage - 1) * registersPerPage + 1, 0),
          Math.min(initialRegister + registersPerPage, listagem.length)
        )
      );
    };
    updatePagination();
  }, [currentPage]);

  // * ####### Data #######
  const SelectItemToManage = (e) => {
    let value = e.target.value;
    let itemToSet = people.filter((i) => i.cpf === value);
    setPersonToManage(itemToSet);
    setGoToEdit(true);
  };

  // * ####### Data #######
  const Header = () => {
    return (
      <h2 className="text-2xl font-bold leading-7 p-2 mt-2 text-gray-900 sm:text-3xl sm:truncate">
        Visualizar Cadastrados
      </h2>
    );
  };

  const Table = () => {
    return (
      <>
        <div className="flex flex-col pt-20 bg-gray-50">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Nome
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Idade
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Estado Civil
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CPF
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cidade
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                      <tr key={person.cpf} value={person}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.nome}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.idade}
                          </div>
                          {/* <div className="text-sm text-gray-500">
                            {person.department}
                          </div> */}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {person.estadoCivil}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.cpf}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.cidade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.estado}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            value={person.cpf}
                            onClick={SelectItemToManage}
                            // onCLick={() => this.SelectItemToManage(person)}
                            // href="/editar"
                          >
                            editar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header />
      <Table />
      <Pagination
        paginationStatus={paginationStatus}
        setCurrentPage={setCurrentPage}
      />
      {goToEdit ? <Redirect push to="/editar" /> : null}
    </>
  );
}
