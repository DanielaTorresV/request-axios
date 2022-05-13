import './App.css';
import axios from "axios";

function App() {
  //GET
  //pedir muchos recursos
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

    //pedir un recursos especifico (id)
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

  //POST
  //crear un recurso por primera vez
  axios
    .post(
      "https://jsonplaceholder.typicode.com/users",
      {
        id: 11,
        name: "Daniela",
        userusername: "Danny",
        email: "dannytorres@gmail.com"
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

  //PUT
  axios
    .put(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        id: 1,
        title: 'Hello',
        body: 'World and People',
        userId: 1,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Proceso finalizado");
    });

  //DELETE
  axios
    .delete("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Proceso finalizado");
      });

  return (
    <div className="App">
      <h1>Ejercicio de request con axios</h1>
    </div>
  );
}

export default App;
