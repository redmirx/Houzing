import { React, lazy, Suspense } from "react";
import { Loading } from "./style";

// Static import
// import { HomePage } from "./../pages/Home";
// import {PropertiesPage} from "./../pages/Properties";
import { RegisterPage } from "./../pages/Register";
import { MyProfilePage } from "./../pages/MyProfile";
import { MyPropertiesPage } from "./../pages/MyProperties";
// Dynamic import
const HomePage = lazy(() => import("./../pages/Home"));
const PropertiesPage = lazy(() => import("./../pages/Properties"));
const HouseItemPage = lazy(() => import("./../pages/HouseItem"));
const FavouritesPage = lazy(() => import("./../pages/Favourite"));

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
    element: (
      <Suspense fallback={<Loading />}>
        <HouseItemPage />
      </Suspense>
    ),
    title: "HouseItem",
    path: `/properties/:id`,
    private: false,
    hidden: true,
  },
  {
    id: 4,
    element: (
      <Suspense fallback={<Loading />}>
        <FavouritesPage />
      </Suspense>
    ),
    title: "Favourites",
    path: `/favourites`,
    private: true,
    hidden: true,
  },
  {
    id: 5,
    element: <RegisterPage />,
    title: "Register",
    path: "/register",
    private: false,
    hidden: true,
  },
  {
    id: 6,
    element: <MyProfilePage />,
    title: "My profile",
    path: "/my-profile",
    private: true,
    hidden: true,
  },
  {
    id: 7,
    element: <MyPropertiesPage />,
    title: "My properties",
    path: "/my-properties",
    private: true,
    hidden: true,
  },
];
