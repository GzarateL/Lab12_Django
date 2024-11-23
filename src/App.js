import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Spinner, Alert } from 'react-bootstrap';
import SearchBar from './SearchBar';
import CharacterList from './CharacterList';

function App() {
  const [characters, setCharacters] = useState([]); // Lista completa de personajes
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Resultados filtrados
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Cargar datos de la API al montar el componente
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((response) => {
        const sortedCharacters = response.data.results.sort((a, b) =>
          a.name.localeCompare(b.name)
        ); // Ordenar alfabéticamente
        setCharacters(sortedCharacters); // Guardar personajes originales
        setFilteredCharacters(sortedCharacters); // Inicializar personajes filtrados
        setLoading(false); // Finalizar carga
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudieron cargar los datos.');
        setLoading(false);
      });
  }, []);

  // Filtrar personajes según la búsqueda
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = characters.filter((char) =>
      char.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredCharacters(filtered); // Actualizar resultados filtrados
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Personajes de Star Wars</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <Spinner animation="border" className="d-block mx-auto" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && <CharacterList characters={filteredCharacters} />}
    </Container>
  );
}

export default App;
