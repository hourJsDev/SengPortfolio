import Layout from "./Page/Layout";
import React from "react";
import HomeLayout from "./Page/Home/HomeLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Page/Home/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<h1 className="text-center text-white">Portfolio page coming soon!</h1>}/>
      </Route>
    )
  );
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
};

export default App;
