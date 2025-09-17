import React from 'react';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div style={{ display: "flex", gap: "1rem", padding: "2rem" }}>
      {/* Botón por defecto */}
      <Button onClick={() => alert("Click en Primary")}>
        Primary Button
      </Button>

      {/* Botón secundario */}
      <Button variant="secondary" onClick={() => alert("Click en Secondary")}>
        Secondary Button
      </Button>

      {/* Botón de peligro (rojo, por ejemplo) */}
      <Button variant="danger" onClick={() => alert("Click en Danger")}>
        Danger Button
      </Button>

      {/* Botón deshabilitado */}
      <Button variant="primary" disabled>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;
