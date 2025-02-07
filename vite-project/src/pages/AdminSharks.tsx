import { useState, useEffect } from "react";
import { Shark } from "../types/shark";
import { fetchSharks } from "../Api/sharks";
import { Link } from "react-router-dom";

function AdminSharks() {
  const [sharks, setSharks] = useState<Shark[]>([]);

  useEffect(() => {
    fetchSharks().then(setSharks);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Administração de Tubarões</h1>
      <Link to="/admin/sharks/novo" className="bg-teal-600 text-white px-4 py-2 rounded-md">
        Adicionar Novo Tubarão
      </Link>
      <table className="mt-4 w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Nome</th>
            <th className="border border-gray-300 p-2">Imagem</th>
            <th className="border border-gray-300 p-2">Localização</th>
          </tr>
        </thead>
        <tbody>
          {sharks.map((shark) => (
            <tr key={shark.id} className="text-center text-white">
              <td className="border border-gray-300 p-2">{shark.id}</td>
              <td className="border border-gray-300 p-2">{shark.title}</td>
              <td className="border border-gray-300 p-2">
                <img src={`http://localhost:4000/${shark.image.src}`} alt={shark.image.alt} className="w-16 h-16 object-cover mx-auto" />
              </td>
              <td className="border border-gray-300 p-2">{shark.lat}, {shark.lon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminSharks;
