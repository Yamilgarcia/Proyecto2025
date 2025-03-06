import PropTypes from 'prop-types';

function SalaryDisplay({ salario }) {
  return salario > 0 && (
    <div>
      <h2>El salario mensual es: ${salario}</h2>
    </div>
  );
}

SalaryDisplay.propTypes = {
  salario: PropTypes.number.isRequired,
};

export default SalaryDisplay;
