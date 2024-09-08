import "./routes/layout/layout.scss"
// import Navbar from "./components/navbar/Navbar.jsx"
import HomePage from "./routes/homePage/homePage"

import {    // https://reactrouter.com/en/main/start/overview
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListPage from "./routes/listPage/listPage.jsx";
import Layout from "./routes/layout/layout.jsx";
import SinglePage from "./routes/singlePage/SinglePage.jsx";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",  // any random string value or number 
          element: <SinglePage />
        }
      ]
    },
    {
      path: "/list",
      element: <ListPage />,
    },
  ]);

  return (
    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>                // all this now moved to the "layout.jsx"

    <RouterProvider router={router} />
  );
}

export default App;