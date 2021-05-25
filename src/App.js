import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./app/components/navbar";
import Cadastro from "./app/components/cadastro";
import Editar from "./app/components/editar";
import Table from "./app/components/table";
// baseData for front end dev
import base from "./app/baseData/baseCadastro.json";

const App = () => {
  const [listagem, setListagem] = useState(base);
  const [personToManage, setPersonToManage] = useState("");
  ///
  const addNewPerson = (newPerson) => {
    setListagem([...Cadastro, newPerson]);
  };
  const editPerson = (personToEdit) => {
    const listIndex = listagem.findIndex((e) => e.cpf === personToEdit.cpf);
    console.log(
      "listagem",
      listagem.map((i) => i.cpf)
    );
    console.log("edit me", listIndex, personToEdit.cpf);
    // 1. find index with objIndex = array.findIndex((obj) => obj.is == id.received)
    // 2. update property with array[objIndex].property = newValue
    // 3. log to check
  };
  const deletePerson = (personToDelete) => {
    console.log("Delete at app", personToDelete[0].cpf);
    setListagem(listagem.filter((item) => item.cpf !== personToDelete[0].cpf));
    return true;
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Table {...{ listagem, setPersonToManage }} />}
          />
          <Route
            exact
            path="/cadastro"
            render={(props) => <Cadastro {...{ addNewPerson }} />}
          />
          <Route
            exact
            path="/editar"
            render={(props) => (
              <Editar {...{ personToManage, editPerson, deletePerson }} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
