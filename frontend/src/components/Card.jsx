import { useNavigate } from "react-router-dom";

import { instance } from "../api/axios";

export function Card({ task, setTasks }) {
  const navigate = useNavigate();
  async function taskCompleteHandler(id) {
    await instance.patch(`/tasks/done/${id}`);
    setTasks((prev) =>
      prev.map((task) => (task._id === id ? { ...task, isDone: true } : task)),
    );
  }
  return (
    <>
      <div className="border border-black h-45 w-60  my-4 flex flex-col justify-center items-center gap-3 ">
        <p className="w-full text-center wrap-break-word">
          <span className="font-bold">Title: </span>
          {task.title}
        </p>
        <p className="w-full text-center wrap-break-word">
          <span className="font-bold">Description: </span>
          {task.description}
        </p>
        <div className="flex justify-around w-full">
          {!task.isDone ? (
            <>
              <button
                onClick={() => navigate(`/update/${task._id}`)}
                className="py-1 px-4 bg-blue-600 text-white rounded-full text-sm cursor-pointer"
              >
                Edit/Delete
              </button>

              <button
                className="px-3 bg-green-700 text-white rounded-full text-sm cursor-pointer"
                onClick={() => taskCompleteHandler(task._id)}
              >
                Mark as Done
              </button>
            </>
          ) : (
            <span className="text-lg font-bold text-green-600">
              ✅ Task Done
            </span>
          )}
        </div>
      </div>
    </>
  );
}
