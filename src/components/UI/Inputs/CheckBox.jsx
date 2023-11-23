

const Checkbox = ({ label, id,  checked,  onChange }) => {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" id={id} className="w-[20px] h-[24px]"checked={checked}
        onChange={onChange}/>
      <label htmlFor={id} className="text-[#323C45B2]">{label}</label>
    </div>
  );
};

export default Checkbox;
