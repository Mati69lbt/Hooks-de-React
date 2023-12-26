import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UseRef from "./components/useref/UseRef.jsx";
import UseMemo from "./components/usememo/UseMemo.jsx";
import UseEffeect from "./components/useeffect/UseEffeect.jsx";
import UseReducer from "./components/usereducer/UseReducer.jsx";
import UseContext from "./components/usecontext/UseContext.jsx";
import UseId from "./components/useid/UseId.jsx";
import Personalizados from "./components/personalizados/Personalizados.jsx";

import Inicio from "./components/usecontext/componentes_useContext/Inicio.jsx";
import Acerca from "./components/usecontext/componentes_useContext/Acerca.jsx";
import Articulos from "./components/usecontext/componentes_useContext/Articulos.jsx";
import Contact from "./components/usecontext/componentes_useContext/Contact.jsx";
import Login from "./components/usecontext/componentes_useContext/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/useRef",
        element: <UseRef />,
      },
      {
        path: "/useMemo",
        element: <UseMemo />,
      },
      {
        path: "/useEffect",
        element: <UseEffeect />,
      },
      {
        path: "/useReducer",
        element: <UseReducer />,
      },
      {
        path: "/useContext",
        element: <UseContext />,
        children: [
          { path: "inicio", index: true, element: <Inicio /> },
          {
            path: "acerca",
            element: <Acerca />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "articulos",
            element: <Articulos />,
          },
          {
            path: "contactos",
            element: <Contact />,
          },
          {
            path: "*",
            element: <div>Error de página</div>,
          },
        ],
      },
      {
        path: "/useId",
        element: <UseId />,
      },
      {
        path: "/personalizados",
        element: <Personalizados />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
