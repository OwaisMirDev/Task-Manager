import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/Home";
import { AddTask } from "./components/AddTask";

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
    </>
  );
}

export default App;
