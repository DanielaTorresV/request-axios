import axios from "axios";

const clog = console.log;
const cgroup = console.group;
const cgend = console.groupEnd;

class JsonPlaceHolder {
  getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.__printData("Todos los post", response.data);
      })
      .catch((error) => {
        this.__printData("Error en la petición", error);
      })
      .finally(() => {
        clog("Petición de todos los post terminado.");
      });
  }

  getPost(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios
      .get(url)
      .then((response) => {
        this.__printData(`Recuperando el post con id:${id}`, response.data);
      })
      .catch((error) => {
        this.__printData("Error en la petición", error);
      })
      .finally(() => {
        console.log(`Proceso get para el post ${id} terminado.`);
      });
  }

  createUser(data) {
    const url = "https://jsonplaceholder.typicode.com/users";

    axios
      .post(url, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        this.__printData("Crear usuario usando post", response.data);
      })
      .catch((error) => {
        this.__printData("Error en la petición", error);
      })
      .finally(() => {
        clog("Petición POST para nuevo usuario terminada.");
      });
  }

  updatePost(id, data) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios
      .put(url, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        this.__printData(`Actualizando el post con id:${id}`, response.data);
      })
      .catch((error) => {
        this.__printData("Error en la petición", error);
      })
      .finally(() => {
        clog("Peticion PUT terminada");
      });
  }

  deleteUser(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios
      .delete(url)
      .then((response) => {
        this.__printData(`Eliminando el usuario id:${id}`, response.data);
      })
      .catch((error) => {
        this.__printData("Error en la petición", error);
      })
      .finally(() => {
        clog("Peticion DELETE terminada");
      });
  }

  __printData(label, data) {
    cgroup(label);
    clog(data);
    cgend();
  }
}

export default JsonPlaceHolder;
