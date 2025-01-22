
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}


 const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onConfirm }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
          <h3 className="text-xl text-cyan-300 mb-4">Confirmar Remoção</h3>
          <p className="text-white mb-6">
            Tem certeza que deseja remover da sua lista?
          </p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    )
}

export default Modal;