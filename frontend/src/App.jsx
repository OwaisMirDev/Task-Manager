import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/Home";
import { AddTask } from "./components/AddTask";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="add" element={<AddTask />} />
      <Route path="update/:id" element={<AddTask />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
