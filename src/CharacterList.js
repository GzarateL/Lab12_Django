import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const CharacterList = ({ characters }) => {
  if (characters.length === 0) {
    return <p className="text-center">No se encontraron personajes.</p>; // Mensaje si no hay resultados
  }

  return (
    <Row>
      {characters.map((character, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>{character.name}</Card.Title>
              <Card.Text>
                <strong>Género:</strong> {character.gender}<br />
                <strong>Año de nacimiento:</strong> {character.birth_year}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CharacterList;
