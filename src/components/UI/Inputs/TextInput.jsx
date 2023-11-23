




const TextInput = ({ placeholder, type, label, id, onChange, value }) => {
  return (
    <div>
      <label className="text-sm text-[#323C45]" htmlFor={id}>
        {label}
      </label>
      <br />
    <input type={type} placeholder={placeholder} id={id} onChange={onChange} value={value} 
     className="w-full h-12 px-3 mt-2 text-sm text-gray-700 placeholder-gray-400 border 
     rounded-sm inputs "
    />
    </div>
  );
};

export default TextInput;
