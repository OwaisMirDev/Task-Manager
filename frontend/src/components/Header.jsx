import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className=" h-15 flex justify-around items-center bg-rose-800">
      <div className="text-3xl font-bold text-white/90">Task Manager</div>
      <nav className="flex  w-35 justify-between">
        <Link to="/" className="text-white font-bold">
          Home
        </Link>
        <Link to="/add" className="text-white font-bold">
          Add Task
        </Link>
      </nav>
    </div>
  );
}
