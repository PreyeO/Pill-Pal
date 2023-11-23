const DownloadBtn = ({ label,  src, type }) => {
    return (
      <button
        className="rounded-md p-2  w-[225px] h-[80px] flex gap-2 justify-center items-center bg-[#1A1A1A] text-[#FCFCFC] lg:text-base text-sm"
        type={type}
       
      >
        <img src={src} alt="userIcon" className="" />
        {label}
      </button>
    );
  };
  
  export default DownloadBtn;
  