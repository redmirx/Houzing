import { HomePage } from "./../pages/Home";
import { PropertiesPage } from "./../pages/Properties";
import useUniqueID from "./../hooks/useID";
export const navbar = [
  {
    id: useUniqueID,
    element: <HomePage />,
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useUniqueID,
    element: <PropertiesPage />,
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
];
