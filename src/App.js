import "./App.css";
import JsonPlaceHolder from "./jsonPlaceHolder";

function App() {
  const api = new JsonPlaceHolder();

  //GET
  api.getPosts();

  //GET
  api.getPost(1);

  //POST
  api.createUser({
    id: 11,
    name: "Daniela",
    userusername: "Danny",
    email: "dannytorres@gmail.com",
  });

  //PUT
  api.updatePost(1, {
    id: 1,
    title: "Hello",
    body: "World and People",
    userId: 1,
  });

  //DELETE
  api.deleteUser(1);

  return (
    <div className="App">
      <h1>Ejercicio de request con axios</h1>
    </div>
  );
}

export default App;
