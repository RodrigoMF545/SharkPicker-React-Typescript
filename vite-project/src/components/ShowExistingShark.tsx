import { useSharks } from "../Api/sharks";
import { Shark } from "../types/shark";
import SharkCard from "./SharkCard";



interface ExistingSharkProps {
  selectedSharks: Shark[];
  onSelect: (shark: Shark) => void; 
}

const ShowExistingShark: React.FC<ExistingSharkProps> = ({ 
  selectedSharks = [], 
  onSelect 
}) => {
  const { data: sharks, isLoading, error } = useSharks();

  if (isLoading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-800">
        <h2 className="text-2xl text-cyan-300 text-center mb-4">
          Tubarões Existentes
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2 text-gray-400">
            <span>Carregando dados dos tubarões...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-800">
        <h2 className="text-2xl text-cyan-300 text-center mb-4">
          Tubarões Existentes
        </h2>
        <div className="flex items-center justify-center">
          <div className="text-orange-400">{error.message}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-800">
      <h2 className="text-2xl text-cyan-300 text-center mb-4">
        Tubarões Existentes
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sharks?.map((shark: Shark) => (
            <SharkCard 
              key={shark.id} 
              shark={shark}  
              isSelected={selectedSharks.some(s => s.id === shark.id)} 
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowExistingShark;