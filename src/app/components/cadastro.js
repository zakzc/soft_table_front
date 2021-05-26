import { useState, useEffect } from "react";
import { useFormik } from "formik";
/// utils
import validate from "../utils/validate";
import Alerts from "../utils/alerts";

export default function Cadastro({ addNewPerson, setNavigation }) {
  const [alertToUser, setAlertToUser] = useState({
    show: false,
    type: null,
    message: null,
    details: null,
  });

  useEffect(() => {
    setNavigation({
      lista: false,
      cadastro: true,
    });
  }, []);

  // * ####### Data #######
  const displayValidationMessage = (type, message, details) => {
    setAlertToUser({
      show: true,
      type: type,
      message: message,
      details: details,
    });
  };
  ///
  const handleValidation = (data) => {
    let check = validate(data);
    if (check.success) {
      displayValidationMessage("success", "Dados válidos", null);
      return true;
    } else {
      displayValidationMessage(
        "warn",
        "confira se os dados estão corretos",
        check.message
      );
    }
  };
  ///
  const handleSubmit = () => {
    const novoValor = {
      nome: formik.values.nome,
      idade: formik.values.idade,
      estadoCivil: formik.values.estadoCivil,
      cpf: formik.values.cpf,
      cidade: formik.values.cidade,
      estado: formik.values.estado,
    };
    if (handleValidation(novoValor)) {
      addNewPerson(novoValor);
    }
  };
  const formik = useFormik({
    initialValues: {
      nome: "",
      idade: "",
      estadoCivil: "",
      cpf: "",
      cidade: "",
      estado: "",
    },
    onSubmit: handleSubmit,
  });
  // * ####### View #######
  const Header = () => {
    return (
      <h2 className="text-2xl p-2 mt-2  font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Novo Cadastro
      </h2>
    );
  };
  ///
  return (
    <>
      <Header />
      <Alerts
        type={alertToUser.type}
        message={alertToUser.message}
        details={alertToUser.details}
      />
      <div className="bg-gray-50">
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        {/* form message */}
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
              {/* <form> */}
              <form onSubmit={formik.handleSubmit}>
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
                          name="nome"
                          type="text"
                          id="nome"
                          value={formik.values.nome}
                          onChange={formik.handleChange}
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
                          type="number"
                          name="idade"
                          id="idade"
                          value={formik.values.idade}
                          onChange={formik.handleChange}
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
                          name="estadoCivil"
                          id="estadoCivil"
                          value={formik.values.estadoCivil}
                          onChange={formik.handleChange}
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
                          value={formik.values.cpf}
                          onChange={formik.handleChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label
                          htmlFor="cidade"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Cidade
                        </label>
                        <input
                          type="text"
                          name="cidade"
                          id="cidade"
                          values={formik.values.cidade}
                          onChange={formik.handleChange}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="estado"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Estado
                        </label>
                        <select
                          id="estado"
                          name="estado"
                          values={formik.values.estado}
                          onChange={formik.handleChange}
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
