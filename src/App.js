import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./app/components/navbar";
import Cadastro from "./app/components/cadastro";
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
