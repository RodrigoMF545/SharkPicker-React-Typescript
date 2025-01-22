
import { Shark } from "../types/shark";
import SharkCard from "./SharkCard";


interface ExistingSharkProps {
  shark: Shark[];
  isLoading: boolean;
  error: string | null;
  selectedSharks?: Shark[],
  onselect: (shark: Shark) => void
}


const ShowExistingShark: React.FC<ExistingSharkProps> = ({shark, isLoading, error, selectedSharks = [], onselect}) => {

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 border-t border-gray-800">
      <h2 className="text-2xl text-cyan-300 text-center mb-4">
        Tubaroes Existentes
      </h2>
      <div className="flex items-center justify-center">
        {isLoading ?(
          <div className="flex items-center gap-2 text-gray-400">
            <span> Carregando dados dos tubaroes...</span>
          </div>
        ) : error ? (
          <div className="text-orange-400">{error}</div>
        ):(
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shark.map((shark) => (
              <SharkCard 
              key={shark.id} 
              shark={shark}  
              isSelected={selectedSharks.some(s => s.id === shark.id) ?? false}
              onselect={onselect}
              />
            ))}
         </div> 
        )}
      </div>
    </section>
  )
}
export default ShowExistingShark;