import { Shark } from "../types/shark";
import SharkCard from "./SharkCard";

interface WantToseeComponentProps {
  selectedSharks?: Shark[];
  onselect?: (shark: Shark) => void;
  onDeleteClick?: (shark: Shark) => void;
}

const WantToseeComponent: React.FC<WantToseeComponentProps> = ({
  selectedSharks = [],
  onselect,
  onDeleteClick
}) => {
  return (
    <div className="mx-auto py-8 border-t border-b border-white mb-8">
      <h2 className="text-3xl text-cyan-300 text-center mb-4">
        Eu gostaria de ver...
      </h2>
      {!selectedSharks || selectedSharks.length === 0 ? (
        <p className="text-gray-400 text-center">
          Seleciona abaixo tubarões que você gostaria de ver.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {selectedSharks.map((shark) => (
            <div 
              key={shark.id} 
              className="relative group"
              onClick={() => onDeleteClick?.(shark)}
            >
              <SharkCard
                shark={shark}
                isSelected={true}
                onselect={() => onselect?.(shark)}
              />
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WantToseeComponent;