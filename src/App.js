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
  const [people, setPeople] = useState(base);
  const addNewPerson = (newPerson) => {
    console.log("Received");
    setPeople([...people, newPerson]);
    console.log("=>", people, typeof people, newPerson, typeof newPerson);
    console.log("is now: ", people);
  };
  const editPerson = (updatedPerson) => {
    console.log("Received");
    setPeople([...people, updatedPerson]);
    console.log(
      "=>",
      people,
      typeof people,
      updatedPerson,
      typeof updatedPerson
    );
    console.log("is now: ", people);
  };
  const deletePerson = (personToDelete) => {
    console.log("Received");
    setPeople([...people, personToDelete]);
    console.log(
      "=>",
      people,
      typeof people,
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
          <Route exact path="/" render={(props) => <Table {...[people]} />} />
          <Route
            exact
            path="/cadastro"
            render={(props) => <Cadastro {...{ addNewPerson }} />}
          />
          <Route
            exact
            path="/editar"
            render={(props) => <Editar {...{ editPerson, deletePerson }} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
