import { useNavigate } from "react-router-dom";

export function Card({ task }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="border border-black h-45 w-60  my-4 flex flex-col justify-center items-center gap-3 ">
        <p className="w-full text-center">
          <span className="font-bold">Title: </span>
          {task.title}
        </p>
        <p className="w-full text-center">
          <span className="font-bold">Description:</span>
          {task.description}
        </p>
        <div className="flex justify-around w-full">
          <button
            onClick={() => navigate(`/update/${task._id}`)}
            className="py-1 px-4 bg-blue-600 text-white rounded-full text-sm cursor-pointer"
          >
            Edit/Delete
          </button>
          <button className="px-3 bg-green-700 text-white rounded-full text-sm cursor-pointer">
            Mark as Done
          </button>
        </div>
      </div>
    </>
  );
}
