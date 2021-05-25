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
  const [Listagem, setListagem] = useState(base);
  const [personToManage, setPersonToManage] = useState("");
  ///
  console.log("ca, ", Cadastro, typeof Cadastro, typeof base);
  console.log("person: ", personToManage);
  const addNewPerson = (newPerson) => {
    console.log("Received");
    setListagem([...Cadastro, newPerson]);
    console.log("=>", Cadastro, typeof Cadastro, newPerson, typeof newPerson);
    console.log("is now: ", Cadastro);
  };
  const editPerson = () => {
    console.log("Received");
    // setPeople([...people, dataToUpdate]);
    // console.log("=>", people, typeof people, dataToUpdate, typeof dataToUpdate);
    // console.log("is now: ", people);
  };
  const deletePerson = (personToDelete) => {
    console.log("Received");

    console.log(
      "=>",
      Cadastro,
      typeof Cadastro,
      personToDelete,
      typeof personToDelete
    );
    console.log("is now: ", personToDelete);
  };
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Table {...{ Listagem, setPersonToManage }} />}
          />
          <Route
            exact
            path="/cadastro"
            render={(props) => <Cadastro {...{ addNewPerson }} />}
          />
          <Route
            exact
            path="/editar"
            render={(props) => <Editar {...{ personToManage }} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
