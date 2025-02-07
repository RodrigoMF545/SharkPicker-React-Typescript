import HeroSection from "../components/HeroSection";
import ShowExistingShark from "../components/ShowExistingShark";
import WantToseeComponent from "../components/WantToseeComponent";
import { useState, useEffect } from "react";
import { Shark } from "../types/shark";
import { fetchSharks } from "../Api/sharks";
import Modal from "../components/Modal";

function SharkPicker() {
  const [sharks, setSharks] = useState<Shark[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSharks, setSelectedSharks] = useState<Shark[]>(() => {
    const saved = localStorage.getItem('selectedSharks');
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState<string | null>(null);
  const [sharktoDelete, setSharkToDelete] = useState<Shark | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  useEffect(() => {
    const loadsharks = async () => {
      try {
        const sharks = await fetchSharks();
        setSharks(sharks);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Erro ao buscar os tubarões");
      } finally {
        setLoading(false);
      }
    };

    loadsharks();
  }, []);

  //guardar na localstorage
  useEffect(() => {
    localStorage.setItem('selectedSharks', JSON.stringify(selectedSharks));
  }, [selectedSharks])

  const handleSelectShark = (shark: Shark) => {
    setSelectedSharks((prevSelectedSharks) => {
      const isSelected = prevSelectedSharks.some((s) => s.id === shark.id);
      return isSelected ? prevSelectedSharks : [...prevSelectedSharks, shark];
    });
  };

  const handleDeleteClick = (shark: Shark) => {
    setSharkToDelete(shark);
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = () => {
    if (sharktoDelete) {
      setSharks((prevSharks) => prevSharks.filter((s) => s.id !== sharktoDelete.id));
      setSelectedSharks((prevSelectedSharks) => prevSelectedSharks.filter((s) => s.id !== sharktoDelete.id));
      setSharkToDelete(null);
      setShowDeleteConfirm(false);
    }
  };

  return (
    <div className="p-6">
      <HeroSection />
      <WantToseeComponent selectedSharks={selectedSharks} onselect={handleSelectShark} onDeleteClick={handleDeleteClick} />
      <ShowExistingShark shark={sharks} isLoading={loading} error={error} onselect={handleSelectShark} />
      {showDeleteConfirm && (
        <Modal isOpen={showDeleteConfirm} onClose={() => setShowDeleteConfirm(false)} onConfirm={handleDeleteConfirm} />
      )}
    </div>
  );
}

export default SharkPicker;
