import { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Table({ listagem, setPersonToManage }) {
  // const [list] = useState(props[0]);
  // const [pageIndex] = useState(8);
  // const [curPage, setCurPage] = useState(1);
  // const [numberOfPages] = useState(Math.ceil(list.length / pageIndex));
  // const [pageBegin, setPageBegin] = useState((curPage - 1) * pageIndex);
  // const [pageEnd, setPageEnd] = useState(pageBegin + pageIndex);
  // const [people, setPeople] = useState(list.slice(pageBegin, pageEnd));
  // const [curPage] = useState(1);
  // const [pageBegin] = useState((curPage - 1) * pageIndex);
  // const [pageEnd] = useState(pageBegin + pageIndex);
  const [people] = useState(listagem);
  // const [selected, setSelected] = useState("");
  const [goToEdit, setGoToEdit] = useState(false);

  const SelectItemToManage = (e) => {
    let value = e.target.value;
    let itemToSet = people.filter((i) => i.cpf === value);
    console.log("now: ", itemToSet);
    setPersonToManage(itemToSet);
    setGoToEdit(true);
  };
  // views
  const Header = () => {
    return (
      <h2 className="text-2xl font-bold leading-7 p-2 mt-2 text-gray-900 sm:text-3xl sm:truncate">
        Visualizar Cadastrados
      </h2>
    );
  };

  // const Pagination = () => {
  //   return (
  //     <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
  //       <div className="flex-1 flex justify-between sm:hidden"></div>
  //       <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
  //         <div>
  //           <p className="text-sm text-gray-700">
  //             Mostrando <span className="font-medium"> {pageBegin}</span> até
  //             <span className="font-medium"> {pageEnd} </span> de
  //             <span className="font-medium"> {numberOfPages}</span> resultados.
  //           </p>
  //         </div>
  //         <div>
  //           <nav
  //             className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
  //             aria-label="Pagination"
  //           >
  //             <button
  //               onClick={Previous}
  //               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  //             >
  //               <span>Anterior</span>
  //             </button>
  //             <button
  //               onClick={Next}
  //               className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
  //             >
  //               <span>Próximo</span>
  //             </button>
  //           </nav>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
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
      {/* <Pagination /> */}
      {goToEdit ? <Redirect push to="/editar" /> : null}
    </>
  );
}
