import { useState } from 'react';
import './App.css'; // Asegúrate de importar los estilos

function App() {
  const [horas, setHoras] = useState(0);
  const [pagoPorHora, setPagoPorHora] = useState(0);
  const [salario, setSalario] = useState(0);

  const calcularSalario = () => {
    const totalSalario = horas * pagoPorHora;
    setSalario(totalSalario);
  };

  return (
    <div className="App">
      <h1>Calculadora de Salario Mensual</h1>

      <div>
        <label htmlFor="horas">Horas trabajadas: </label>
        <input
          id="horas"
          type="number"
          value={horas}
          onChange={(e) => setHoras(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pago">Pago por hora: </label>
        <input
          id="pago"
          type="number"
          value={pagoPorHora}
          onChange={(e) => setPagoPorHora(e.target.value)}
        />
      </div>

      <button onClick={calcularSalario}>Calcular Salario</button>

      {salario > 0 && (
        <div>
          <h2>El salario mensual es: ${salario}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
