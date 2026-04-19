import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const isEdit = Boolean(id);
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      const response = await axios.get(
        `http://localhost:3000/tasks/single/${id}`,
      );
      const task = response.data.task;
      setTitle(task.title);
      setDescription(task.description);
    }
    if (isEdit) {
      getTask();
    }
  }, []);

  async function submitHandler(e) {
    e.preventDefault();
    if (isEdit) {
      await axios.patch(`http://localhost:3000/tasks/update/${id}`, {
        title,
        description,
      });
    } else {
      await axios.post("http://localhost:3000/tasks/create", {
        title,
        description,
      });
    }
    navigate("/");
  }
  async function handleDelete() {
    await axios.delete(`http://localhost:3000/tasks/delete/${id}`);
    navigate("/");
  }
  return (
    <>
      <div className="text-center py-52 bg-rose-50">
        <form onSubmit={submitHandler}>
          <label htmlFor="title" className="block font-bold text-lg">
            Title
          </label>
          <input
            type="text"
            name=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
            className="outline-1 px-2 py-1"
          />
          <label htmlFor="description" className="block mt-5 font-bold text-lg">
            Description
          </label>
          <input
            type="text}"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name=""
            id="description"
            className="outline-1 px-2 py-1"
          />
          <div>
            <button
              className={`border mt-6 py-2 px-5 rounded-full ${isEdit ? "bg-blue-600" : "bg-green-600"} text-white cursor-pointer font-bold text-lg`}
            >
              {isEdit ? "Update" : "Submit"}
            </button>
            {isEdit && (
              <button
                className="border mt-6 py-2 px-5 rounded-full bg-red-600 text-white cursor-pointer font-bold text-lg ml-3"
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
