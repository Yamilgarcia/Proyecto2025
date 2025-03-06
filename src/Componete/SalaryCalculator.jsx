import { useState } from 'react';
import InputField from './InputField';
import SalaryDisplay from './SalaryDisplay';

function SalaryCalculator() {
  const [horas, setHoras] = useState(0);
  const [pagoPorHora, setPagoPorHora] = useState(0);
  const [salario, setSalario] = useState(0);

  const calcularSalario = () => {
    setSalario(horas * pagoPorHora);
  };

  return (
    <div className="App">
      <h1>Calculadora de Salario Mensual</h1>

      <InputField 
        label="Horas trabajadas:" 
        id="horas" 
        value={horas} 
        onChange={(e) => setHoras(Number(e.target.value))} 
      />

      <InputField 
        label="Pago por hora:" 
        id="pago" 
        value={pagoPorHora} 
        onChange={(e) => setPagoPorHora(Number(e.target.value))} 
      />

      <button onClick={calcularSalario}>Calcular Salario</button>

      <SalaryDisplay salario={salario} />
    </div>
  );
}

export default SalaryCalculator;
