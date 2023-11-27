const SelectInput = ({
  placeholder,
  type,
  label,
  id,
  onChange,
  value,
  required,
  unitOptions,
}) => {
  return (
    <div>
      <label className="text-sm text-[#323C45]" htmlFor={id}>
        {label}
      </label>
      <br />
      <select
        className="w-full h-12 px-3 mt-2 text-sm text-gray-700 placeholder-gray-400 border 
     rounded-sm inputs "
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        required={required}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {unitOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
