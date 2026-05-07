import { useEffect, useState } from "react";

import { Card } from "./Card";
import { instance } from "../api/axios";
import { toast } from "react-toastify";

export function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await instance.get("/tasks/all");
        const data = response.data.tasks;
        setTasks(data);
        toast.success("ok");
      } catch (error) {
        toast.error(error.errorMessage);
      }
    }
    getData();
  }, []);

  return (
    <div className="grid grid-cols-5 place-items-center">
      {tasks.map((task) => (
        <Card task={task} key={task._id} setTasks={setTasks} />
      ))}
    </div>
  );
}
