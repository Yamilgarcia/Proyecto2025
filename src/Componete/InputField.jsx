import PropTypes from 'prop-types';

function InputField({ label, id, value, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" value={value} onChange={onChange} />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
