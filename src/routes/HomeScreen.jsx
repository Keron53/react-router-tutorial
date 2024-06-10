import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";

export const HomeScreen = () => {
 
    const {usuario} = useContext(UsuarioContext)

  return (
    <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">nombre</th>
          <th scope="col">tecnologia</th>
          <th scope="col">mail</th>
          <th scope="col">redes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{usuario.nombre}</th>
          <td>{usuario.tecnologia}</td>
          <td>{usuario.mail}</td>
          <td>{usuario.redes}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};
