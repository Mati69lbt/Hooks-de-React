import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./app.css";

function App() {
  const navigate = useNavigate();
  const seleccionador = (e) => {
    switch (e.target.value) {
      case "useRef":
        navigate("/useRef");
        break;
      case "useMemo":
        navigate("/useMemo");
        break;
      case "useEffect":
        navigate("/useEffect");
        break;
      case "useReducer":
        navigate("/useReducer");
        break;
      case "useContext":
        navigate("/useContext");
        break;
      case "useId":
        navigate("/useId");
        break;
      case "personalizados":
        navigate("/personalizados");
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <div className="navbar_inicio">
        <h1>Hooks de React</h1>
        <select className="select_hooks" onChange={(e) => seleccionador(e)}>
          <option value="select">Elige un Hook</option>
          <option value="useRef">useRef</option>
          <option value="useMemo">useMemo</option>
          <option value="useEffect">useEffect</option>
          <option value="useReducer">useReducer</option>
          <option value="useContext">useContext</option>
          <option value="useId">useId</option>
          <option value="personalizados">Personalizados</option>
        </select>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;

{
  /* <option value="ref">
          <NavLink to="useref">useRef</NavLink>
        </option>
        <option value="memo">
          <NavLink to="usememo">useMemo</NavLink>
        </option>
        <option value="effect">
          <NavLink to="useeffect">useEffect</NavLink>
        </option>
        <option value="reducer">
          <NavLink to="usereducer">useReducer</NavLink>
        </option>
        <option value="context">
          <NavLink to="usecontext">useContext</NavLink>
        </option>
        <option value="id">
          <NavLink to="useid">useId</NavLink>
        </option>
        <option value="perso">
          <NavLink to="personalizados">Pesonalizados</NavLink>
        </option> */
}
