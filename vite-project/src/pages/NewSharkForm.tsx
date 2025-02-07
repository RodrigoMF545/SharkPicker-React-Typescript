import { useState } from 'react';
import { useAddShark } from '../Api/useAddShark';

const NewSharkForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const { mutate, isPending } = useAddShark();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const newShark = {
      name: title,
      species: title,
      image: { src: image, alt: `Imagem de ${title}` },
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    };

    mutate(newShark);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="URL da Imagem" value={image} onChange={(e) => setImage(e.target.value)} />
      <input type="text" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
      <input type="text" placeholder="Longitude" value={lon} onChange={(e) => setLon(e.target.value)} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Adicionando...' : 'Adicionar Tubarão'}
      </button>
    </form>
  );
};

export default NewSharkForm;
