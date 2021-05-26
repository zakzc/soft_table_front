import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
/// comps
import NavBar from "./app/components/navbar";
import Cadastro from "./app/components/cadastro";
import Editar from "./app/components/editar";
import Table from "./app/components/table";

function App() {
  const [loading, setLoading] = useState(false);
  const [listagem, setListagem] = useState();
  const [personToManage, setPersonToManage] = useState("");

  // * ####### Data #######

  /// firebase
  const ref = firebase.firestore().collection("listaCadastro");

  function getData() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const itemsToLoad = [];
      querySnapshot.forEach((doc) => {
        itemsToLoad.push(doc.data());
      });
      setListagem(itemsToLoad);
      setLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  /// data methods
  const addNewPerson = (newPerson) => {
    console.log("Add on app: ", newPerson, typeof newPerson);
    ref
      .doc(newPerson.cpf)
      .set(newPerson)
      .catch((err) => {
        console.error("Error on add method: ", err);
        return { success: false, message: "Erro ao realizar cadastro" };
      });
    return { success: true, message: "Cadastro realizado com sucesso" };
  };

  const editPerson = (personToEdit) => {
    ref
      .doc(personToEdit.cpf)
      .update(personToEdit)
      .catch((err) => {
        console.error("Error on update method: ", err);
        return { success: false, message: "Erro ao atualizar cadastro" };
      });
    return { success: true, message: "Cadastro atualizado com sucesso" };
  };

  const deletePerson = (personToDelete) => {
    console.log("Delete at app", personToDelete[0].cpf);
    ref
      .doc(personToDelete.cpf)
      .delete()
      .catch((err) => {
        console.error("Error on delete method: ", err);
        return { success: false, message: "Erro ao remover cadastro" };
      });
    return { success: true, message: "Cadastro removido" };
    // setListagem(listagem.filter((item) => item.cpf !== personToDelete[0].cpf));
    // return true;
  };
  ///
  console.log("List is :", listagem, "loading is: ", loading);

  // * ####### View #######
  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Router>
          <NavBar />
          <Switch>
            {listagem ? (
              <Route
                exact
                path="/"
                render={(props) => (
                  <Table {...{ listagem, setPersonToManage }} />
                )}
              />
            ) : null}
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
      )}
    </div>
  );
}

export default App;
