import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:3000/tasks/all");
      const data = response.data.tasks;
      setTasks(data);
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
