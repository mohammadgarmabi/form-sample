import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const DynamicHome = React.lazy(() => import("../pages/Home"));

const routes = [
  {
    path: "/",
    text: "خانه",
    icon: null,
    disabled: false,
    index: true,
    element: (
      <React.Suspense fallback={"loading component ..."}>
        <DynamicHome />
      </React.Suspense>
    ),
  },
];

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        {routes.map((item, key) => (
          <Route {...item} key={key} />
        ))}
      </Routes>
    </Router>
  );
};

export { MainRoute, routes };
