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
