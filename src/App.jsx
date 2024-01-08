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
          <Route path="photography" element={<h1 className="text-center text-white">Photo page coming soon!</h1>}/>
          <Route path="videography" element={<h1 className="text-center text-white">Videography page coming soon!</h1>}/>
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
