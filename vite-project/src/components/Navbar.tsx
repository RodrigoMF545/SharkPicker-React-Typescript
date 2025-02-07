import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-teal-800 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-white text-2xl font-bold">Shark Picker</h1>
      <ul className="flex space-x-6">
        <li>
          <Link className="text-white font-semibold hover:underline" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-white font-semibold hover:underline" to="/admin/sharks">
            Admin Sharks
          </Link>
        </li>
        <li>
          <Link className="text-white font-semibold hover:underline" to="/admin/sharks/novo">
            Add New Shark
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
