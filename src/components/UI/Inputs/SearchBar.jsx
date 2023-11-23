import SearchIcon from "../../../assets/magnify.png"


const SearchBar = () => {


  return (
    <div className="flex justify-between bg-white rounded-md shadow-sm my-2 h-[60px] w-[50%] ">
      <button className="rounded-md px-9 ">
        <img src={SearchIcon} alt="Search Icon" />
      </button>
      <input
        type="text"
        placeholder="Search for Patient"
        className="text-sm rounded-md w-[90%] m-4 h-[30px] text-[#00000040] px-2"/>
      
    </div>
  );
};

export default SearchBar;
