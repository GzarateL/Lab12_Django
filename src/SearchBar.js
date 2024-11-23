import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    const query = e.target.value; // Capturar el valor del input
    onSearch(query); // Llamar al método para filtrar
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar personajes..."
        onChange={handleInputChange} // Ejecutar cada vez que cambia el texto
      />
    </div>
  );
};

export default SearchBar;
