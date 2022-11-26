// import useUniqueID from "./../hooks/useID.jsx";
import { React, lazy, Suspense } from "react";
import { Loading } from "./style";

// Static import
// import { HomePage } from "./../pages/Home";
// import {PropertiesPage} from "./../pages/Properties";

// Dynamic import
const HomePage = lazy(() => import("./../pages/Home"));
const PropertiesPage = lazy(() => import("./../pages/Properties"));

// const loading = <Fragment>Loading...</Fragment>;

export const navbar = [
  {
    id: 1,
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <Suspense fallback={<Loading />}>
        <PropertiesPage />
      </Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: <h1>Sign In</h1>,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
  {
    id: 4,
    element: <h1>Sign Up</h1>,
    title: "Sign Up",
    path: "/signup",
    private: false,
    hidden: true,
  },
];
